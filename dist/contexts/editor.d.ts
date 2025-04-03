import React, { ReactNode } from 'react';
import { Editor } from '@tiptap/react';
import { EditorConfig } from '../types';
export type EditorContextData = {
    editor: Editor;
    config: EditorConfig;
};
export declare const EditorContext: React.Context<EditorContextData | null>;
export declare const EditorProvider: ({ children, store, }: {
    children: ReactNode;
    store: EditorContextData;
}) => import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=editor.d.ts.map