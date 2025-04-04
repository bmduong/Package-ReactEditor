import React from 'react';
import { useEditorData } from '../../../hooks';

export const CodeBlock = () => {
  const { editor } = useEditorData();

  return (
    <a
      title="Code Block"
      className={editor.isActive('codeBlock') ? 'active' : ''}
      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
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
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    </a>
  );
};
