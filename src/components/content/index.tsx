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
  const { editor } = useEditorData();

  const handleClick = useCallback((e: any) => {
    if (e.target.closest('img')) {
      const img = e.target.closest('img');

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

  return (
    <TiptapContent
      editor={editor}
      className="editor-content"
      onClick={handleClick}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

export default EditorContent;
