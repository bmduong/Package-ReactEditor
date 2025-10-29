import React, { FocusEventHandler, useCallback } from 'react';
import { EditorContent as TiptapContent } from '@tiptap/react';
import { useEditorData } from '../../hooks';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

const EditorContent = ({
  onFocus,
  onBlur,
}: {
  onFocus?: FocusEventHandler<HTMLDivElement>;
  onBlur?: FocusEventHandler<HTMLDivElement>;
}) => {
  const { editor, config } = useEditorData();

  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (config.trigger && !config.trigger(e)) {
      return false;
    }

    if (e.target instanceof HTMLElement && e.target.closest('img')) {
      const img = e.target.closest('img') as HTMLImageElement;
      if (img.parentNode && (img.parentNode as HTMLElement).tagName === 'A') {
        return;
      }

      Fancybox.show([
        {
          src: img.src,
        },
      ]).on('close', () => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      });
    }
  }, []);

  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLDivElement>) => {
    const items = e.clipboardData && e.clipboardData.items;
    if (items?.length) {
      const item = items[0];
      if (item.kind === 'file' && item.type.startsWith('image/')) {
        const file = item.getAsFile();
        if (file && config.uploadImage) {
          e.preventDefault();
          const ext = file.name.split('.').pop() || 'png';
          const newName = `img-${Date.now()}.${ext}`;
          const renamedFile = new File([file], newName, { type: file.type });
          config.uploadImage([renamedFile]).then((urls) => {
            editor.chain().focus().setImage({ src: urls[0] }).run();
          });
          return;
        }
      }
    }
  }, []);

  return (
    <TiptapContent
      editor={editor}
      className="editor-content"
      onClick={handleClick}
      onFocus={onFocus}
      onBlur={onBlur}
      onPaste={handlePaste}
    />
  );
};

export default EditorContent;
