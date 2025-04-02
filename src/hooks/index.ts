import { useContext } from 'react';
import { EditorContext, EditorContextData } from '../contexts/editor';

export const useEditorData = (): EditorContextData => {
  const store = useContext(EditorContext);

  if (!store) {
    throw new Error('Editor not initialized');
  }

  return store;
};
