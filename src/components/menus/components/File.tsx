import React, { useEffect, useState } from 'react';
import { useEditorData } from '../../../hooks';

export const File = () => {
  const { editor, config } = useEditorData();
  const [inputFile, setInputFile] = useState<HTMLInputElement | null>(null);
  
  useEffect(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = '.doc,.docx,.xls,.xlsx,.ppt,.pptx,.pdf,.txt';
    input.onchange = (e) => {
      const input = e.target as HTMLInputElement;
      const files = input.files;
      if (!files?.length) return;

      if (config.uploadFile) {
        config.uploadFile(files).then((list) => {
          list.map((item) => {
            editor.chain().focus().insertContent([
              {
                type: 'text',
                text: item.name,
                marks: [
                  {
                    type: 'link',
                    attrs: {
                      href: item.url,
                      target: '_blank',
                    },
                  },
                ],
              },
              {
                type: 'text',
                text: ' ',
              },
            ]).run();
          });
        });
      } else {
        console.warn('Method uploadFile does not exist');
      }

      input.value = '';
    };

    setInputFile(input);

    return () => setInputFile(null);
  }, [editor, config]);

  const handleClick = () => {
    if (inputFile) {
      inputFile.click();
    }
  };

  return (
    <a onClick={handleClick}>
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
        <path d="M13.234 20.252 21 12.3" />
        <path
          d="m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
        />
      </svg>
    </a>
  );
};
