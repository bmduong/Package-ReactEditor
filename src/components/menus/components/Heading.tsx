import React from 'react';
import { useEditorData } from '../../../hooks';

type Level = 1 | 2 | 3 | 4 | 5 | 6;

const Svg = ({ level }: { level: Level }) => {
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
      {level === 1 ? (
        <>
          <path d="M4 12h8" />
          <path d="M4 18V6" />
          <path d="M12 18V6" />
          <path d="m17 12 3-2v8" />
        </>
      ) : level === 2 ? (
        <>
          <path d="M4 12h8" />
          <path d="M4 18V6" />
          <path d="M12 18V6" />
          <path d="M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1" />
        </>
      ) : level === 3 ? (
        <>
          <path d="M4 12h8" />
          <path d="M4 18V6" />
          <path d="M12 18V6" />
          <path d="M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2" />
          <path d="M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2" />
        </>
      ) : level === 4 ? (
        <>
          <path d="M12 18V6" />
          <path d="M17 10v3a1 1 0 0 0 1 1h3" />
          <path d="M21 10v8" />
          <path d="M4 12h8" />
          <path d="M4 18V6" />
        </>
      ) : level === 5 ? (
        <>
          <path d="M4 12h8" />
          <path d="M4 18V6" />
          <path d="M12 18V6" />
          <path d="M17 13v-3h4" />
          <path d="M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17" />
        </>
      ) : (
        <>
          <path d="M4 12h8" />
          <path d="M4 18V6" />
          <path d="M12 18V6" />
          <circle cx="19" cy="16" r="2" />
          <path d="M20 10c-2 2-3 3.5-3 6" />
        </>
      )}
    </svg>
  );
};

export const Heading = ({ level }: { level: Level }) => {
  const { editor } = useEditorData();

  return (
    <a
      title={`Heading ${level}`}
      className={editor.isActive({ level }) ? 'active' : ''}
      onClick={() => editor.chain().focus().toggleHeading({ level }).run()}
    >
      <Svg level={level} />
    </a>
  );
};
