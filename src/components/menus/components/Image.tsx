import React, { useEffect, useState } from 'react';
import { useEditorData } from '../../../hooks';

export const Image = () => {
  const { editor, config } = useEditorData();
  const [inputFile, setInputFile] = useState<HTMLInputElement | null>(null);
  
  useEffect(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = '.jpg,.jpeg,.png,.gif,.webp';
    input.onchange = (e) => {
      const input = e.target as HTMLInputElement;
      const files = input.files;
      if (!files?.length) return;

      if (config.uploadImage) {
        config.uploadImage(files).then((urls) => {
          urls.map((url) => {
            editor.chain().focus().setImage({ src: url }).run();
          });
        });
      } else {
        for (let i = 0; i < files.length; i++) {
          const reader = new FileReader();
          reader.onload = () => {
            const base64 = reader.result as string;
            editor.chain().focus().setImage({ src: base64 }).run();
          };
          reader.readAsDataURL(files[i]);
        }
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
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
      </svg>
    </a>
  );
};
