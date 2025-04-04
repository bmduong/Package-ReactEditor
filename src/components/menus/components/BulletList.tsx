import React from 'react';
import { useEditorData } from '../../../hooks';

export const BulletList = () => {
  const { editor } = useEditorData();

  return (
    <a
      title="Bulleted List"
      className={editor.isActive('bulletList') ? 'active' : ''}
      onClick={() => editor.chain().focus().toggleBulletList().run()}
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
        <path d="M3 12h.01" />
        <path d="M3 18h.01" />
        <path d="M3 6h.01" />
        <path d="M8 12h13" />
        <path d="M8 18h13" />
        <path d="M8 6h13" />
      </svg>
    </a>
  );
};
