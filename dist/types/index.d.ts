import { FocusEventHandler } from 'react';
export type MenuItem = '' | 'bold' | 'italic' | 'underline' | 'strike' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'link' | 'image' | 'mention' | 'blockquote' | 'code-block' | 'bullet-list' | 'ordered-list' | 'text-align';
export type MenuItems = Array<MenuItem>;
export type SuggestionItem = {
    id: number | string;
    label: string;
};
export type EditorProps = {
    config?: EditorConfig;
    value?: string;
    onChange?: (value: string) => void;
    onFocus?: FocusEventHandler<HTMLDivElement>;
    onBlur?: FocusEventHandler<HTMLDivElement>;
};
export type EditorConfig = {
    placeholder: string;
    menubar: MenuItems;
    className?: string;
    popupLink?: (previousUrl: string, submit: (url: string) => void) => void;
    uploadImage?: (files: FileList) => Promise<string[]>;
    getSuggestion?: (query: string) => Array<SuggestionItem>;
};
//# sourceMappingURL=index.d.ts.map