import React from 'react';
import { useEditorData } from '../../../hooks';

type Type = 'left' | 'center' | 'right' | 'justify';

const Svg = ({ type }: { type: Type }) => {
  return (
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
      {type === 'left' ? (
        <>
          <path d="M15 12H3" />
          <path d="M17 18H3" />
          <path d="M21 6H3" />
        </>
      ) : type === 'center' ? (
        <>
          <path d="M17 12H7" />
          <path d="M19 18H5" />
          <path d="M21 6H3" />
        </>
      ) : type === 'right' ? (
        <>
          <path d="M21 12H9" />
          <path d="M21 18H7" />
          <path d="M21 6H3" />
        </>
      ) : (
        <>
          <path d="M3 12h18" />
          <path d="M3 18h18" />
          <path d="M3 6h18" />
        </>
      )}
    </svg>
  );
};

export const TextAlign = () => {
  const { editor } = useEditorData();

  return (
    <>
      <a onClick={() => editor.chain().focus().setTextAlign('justify').run()}>
        <Svg type="justify" />
      </a>
      <a onClick={() => editor.chain().focus().setTextAlign('left').run()}>
        <Svg type="left" />
      </a>
      <a onClick={() => editor.chain().focus().setTextAlign('center').run()}>
        <Svg type="center" />
      </a>
      <a onClick={() => editor.chain().focus().setTextAlign('right').run()}>
        <Svg type="right" />
      </a>
    </>
  );
};
