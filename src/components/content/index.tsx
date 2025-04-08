import { useEditorData } from '../../hooks';
import { EditorContent as TiptapContent } from '@tiptap/react';
import React, { FocusEventHandler, useCallback } from 'react';
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
      ]);
    }
  }, []);

  const handlePaste = useCallback((e: any) => {
    console.log(e)
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
