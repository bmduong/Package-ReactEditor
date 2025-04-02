import React, { createContext, ReactNode } from 'react';
import { Editor } from '@tiptap/react';
import { EditorConfig } from '../types';

export type EditorContextData = {
  editor: Editor;
  config: EditorConfig;
};

export const EditorContext = createContext<EditorContextData | null>(null);

export const EditorProvider = ({
  children,
  store,
}: {
  children: ReactNode;
  store: EditorContextData;
}) => {
  return (
    <EditorContext.Provider value={store}>{children}</EditorContext.Provider>
  );
};
