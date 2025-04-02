import React, { useCallback } from 'react';
import { useEditorData } from '../../../hooks';

export const Link = () => {
  const { editor, config } = useEditorData();

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes('link').href;

    const run = (url: string) => {
      if (!url) {
        if (previousUrl) {
          editor.chain().focus().extendMarkRange('link').unsetLink().run();
        }

        return;
      }

      try {
        editor
          .chain()
          .focus()
          .extendMarkRange('link')
          .setLink({ href: url })
          .run();
      } catch {
        //
      }
    };

    if (config.popupLink) {
      config.popupLink(previousUrl, run);
    } else {
      const url = window.prompt('URL', previousUrl);
      if (url === null) {
        return;
      }

      run(url);
    }
  }, [editor, config]);

  return (
    <a
      title="Link"
      className={editor.isActive('link') ? 'active' : ''}
      onClick={setLink}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    </a>
  );
};
