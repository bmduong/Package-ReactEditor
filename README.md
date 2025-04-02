# React Editor Component

![npm](https://img.shields.io/npm/v/@satek-vn/react-editor)
![license](https://img.shields.io/npm/l/@satek-vn/react-editor)

A rich text editor component built with React and TypeScript, powered by Tiptap.

## Installation

```sh
npm install @satek-vn/react-editor
```

## Usage

```tsx
import React, { useState } from "react";
import Editor from "@satek-vn/react-editor";

const App = () => {
    const [content, setContent] = useState('');
    const config = {
        placeholder: 'Enter content...',
        menubar: ['bold', 'italic', 'underline', 'strike', '', 'bullet-list', 'ordered-list', '', 'text-align', '', 'image', 'link', '', 'h1', 'h2', 'h3', '', 'mention'],
        uploadImage: async (files) => {
            // Example: Upload files and return URLs
            return Array.from(files).map(file => URL.createObjectURL(file));
        },
        popupLink: (previousUrl, submit) => {
            // Example: Open popup and submit url
            const url = window.prompt('URL', previousUrl);
            if (url === null) {
                return;
            }

            submit(url);
        },
        getSuggestion: (query) => {
            // Example: Return mention suggestions
            return [
                {id: 1, label: 'Lea Thompson'},
                {id: 2, label: 'Cyndi Lauper'},
                {id: 3, label: 'Tom Cruise'},
                {id: 4, label: 'Madonna'},
                {id: 5, label: 'Jerry Hall'},
                {id: 6, label: 'Joan Collins'},
                {id: 7, label: 'Winona Ryder'},
                {id: 8, label: 'Christina Applegate'},
                {id: 9, label: 'Alyssa Milano'},
                {id: 10, label: 'Molly Ringwald'},
                {id: 11, label: 'Ally Sheedy'},
                {id: 12, label: 'Debbie Harry'},
                {id: 13, label: 'Olivia Newton-John'},
                {id: 14, label: 'Elton John'},
                {id: 15, label: 'Michael J. Fox'},
                {id: 16, label: 'Axl Rose'},
                {id: 17, label: 'Emilio Estevez'},
                {id: 18, label: 'Ralph Macchio'},
                {id: 19, label: 'Rob Lowe'},
                {id: 20, label: 'Jennifer Grey'},
                {id: 21, label: 'Mickey Rourke'},
                {id: 22, label: 'John Cusack'},
                {id: 23, label: 'Matthew Broderick'},
                {id: 24, label: 'Justine Bateman'},
                {id: 25, label: 'Lisa Bonet'},
            ];
        },
    };

    return (
        <div>
            <Editor config={config} value={content} onChange={setContent} />
        </div>
    );
};

export default App;
```

## Features

The editor supports the following features:

- **Text Formatting**: Bold, Italic, Underline, Strike-through.
- **Headings**: H1, H2, H3, H4, H5, H6.
- **Lists**: Bullet List, Ordered List.
- **Block Elements**: Blockquote, Code Block.
- **Links**: Add and edit hyperlinks.
- **Images**: Upload and insert images.
- **Mentions**: Mention users with suggestions.
- **Text Alignment**: Align text (Left, Center, Right, Justify).
- **Placeholder**: Customizable placeholder text.

## Props

| Prop         | Type                                   | Required | Description                                                                 |
|--------------|----------------------------------------|----------|-----------------------------------------------------------------------------|
| `config`     | `EditorConfig`                         | Yes      | Configuration object for the editor.                                        |
| `value`      | `string`                               | No       | Initial content of the editor.                                              |
| `onChange`   | `(value: string) => void`              | Yes      | Callback function triggered when the content changes.                       |
| `onFocus`    | `(event: FocusEvent) => void`          | No       | Callback function triggered when the editor gains focus.                    |
| `onBlur`     | `(event: FocusEvent) => void`          | No       | Callback function triggered when the editor loses focus.                    |
| `className`  | `string`                               | No       | Additional CSS class for the editor container.                              |

### `EditorConfig`

| Property        | Type                                                           | Required | Description                                                                |
|-----------------|----------------------------------------------------------------|----------|----------------------------------------------------------------------------|
| `placeholder`   | `string`                                                       | No       | Placeholder text displayed when the editor is empty.                       |
| `menubar`       | `string[]`                                                     | Yes      | List of menu items to display in the toolbar.                              |
| `className`     | `string`                                                       | No       | Additional CSS class for the editor.                                       |
| `popupLink`     | `(previousUrl: string, submit: (url: string) => void) => void` | No       | Custom popup for adding/editing links.                                     |
| `uploadImage`   | `(files: FileList) => Promise<string[]>`                       | No       | Function to handle image uploads and return URLs.                          |
| `getSuggestion` | `(query: string) => Array<SuggestionItem>`                     | No       | Function to provide mention suggestions based on the query.                |
| `extensions`    | `Array<Extension>`                                             | No       | Custom extensions to enhance editor functionality.                         |

### `Menubar`

| Menu Item       | Description                                          |
|-----------------|------------------------------------------------------|
| `bold`          | Apply bold formatting to the selected text. `        |
| `italic`        | Apply italic formatting to the selected text.        |
| `underline`     | Apply underline formatting to the selected text.     |
| `strike`        | Apply strikethrough formatting to the selected text. |
| `link`          | Add or edit a hyperlink.                             |
| `image`         | Upload and insert an image.                          |
| `blockquote`    | Convert the selected text into a blockquote.         |
| `code-block`    | Insert a block of code.                              |
| `bullet-list`   | Create a bullet list.                                |
| `ordered-list`  | Create a numbered list.                              |
| `text-align`    | Align text (left, center, right, justify).           |
| `mention`       | Mention a user with suggestions.                     |
| `h1`            | Apply Heading 1 style.                               |
| `h2`            | Apply Heading 2 style.                               |
| `h3`            | Apply Heading 3 style.                               |
| `h4`            | Apply Heading 4 style.                               |
| `h5`            | Apply Heading 5 style.                               |
| `h6`            | Apply Heading 6 style.                               |

## Development

To run the component locally:

```sh
npm install
npm run dev
```

## License

This project is licensed under the MIT License.

