import React, { forwardRef, useImperativeHandle, useMemo, useState } from 'react';
import { ReactRenderer, useEditor } from '@tiptap/react';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import Strike from '@tiptap/extension-strike';
import Link from '@tiptap/extension-link';
import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import BulletList from '@tiptap/extension-bullet-list';
import ListItem from '@tiptap/extension-list-item';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import OrderedList from '@tiptap/extension-ordered-list';
import Blockquote from '@tiptap/extension-blockquote';
import CodeBlock from '@tiptap/extension-code-block';
import Heading from '@tiptap/extension-heading';
import TextAlign from '@tiptap/extension-text-align';
import Image from '@tiptap/extension-image';
import Mention from '@tiptap/extension-mention';
import { SuggestionProps, SuggestionKeyDownProps } from '@tiptap/suggestion';
import tippy from 'tippy.js';

import { EditorConfig, EditorProps } from '../types';
import { EditorProvider } from '../contexts/editor';
import EditorMenu from './menus';
import EditorContent from './content';

export const Editor = ({
  config,
  value,
  onChange,
  onFocus,
  onBlur,
}: EditorProps) => {
  const setting: EditorConfig = {
    placeholder: 'Enter content...',
    menubar: [
      'bold',
      'italic',
      'underline',
      'strike',
      'bullet-list',
      'ordered-list',
      'text-align',
    ],
  };

  const mergedConfig = Object.assign(setting, config);
  const extensions = useMemo(() => {
    const extensions: any[] = [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({
        placeholder: mergedConfig.placeholder,
      }),
    ];

    if (mergedConfig.menubar.includes('bold')) {
      extensions.push(Bold);
    }

    if (mergedConfig.menubar.includes('italic')) {
      extensions.push(Italic);
    }

    if (mergedConfig.menubar.includes('underline')) {
      extensions.push(Underline);
    }

    if (mergedConfig.menubar.includes('strike')) {
      extensions.push(Strike);
    }

    if (mergedConfig.menubar.includes('link')) {
      extensions.push(
        Link.configure({
          openOnClick: false,
          autolink: true,
          defaultProtocol: 'https',
          protocols: ['http', 'https'],
        }),
      );
    }

    if (mergedConfig.menubar.includes('image')) {
      extensions.push(
        Image.configure({
          inline: true,
        }),
      );
    }

    if (mergedConfig.menubar.includes('mention')) {
      const Content = forwardRef((props: SuggestionProps, ref) => {
        const [selectedIndex, setSelectedIndex] = useState(0);

        const selectItem = (index: number) => {
          const item = props.items[index];

          if (item) {
            props.command(item);
          }
        };

        const upHandler = () => {
          setSelectedIndex(
            (selectedIndex + props.items.length - 1) % props.items.length,
          );
        };

        const downHandler = () => {
          setSelectedIndex((selectedIndex + 1) % props.items.length);
        };

        const enterHandler = () => {
          selectItem(selectedIndex);
        };

        useImperativeHandle(ref, () => ({
          onKeyDown: ({ event }: any) => {
            if (event.key === 'ArrowUp') {
              upHandler();
              return true;
            }

            if (event.key === 'ArrowDown') {
              downHandler();
              return true;
            }

            if (event.key === 'Enter') {
              enterHandler();
              return true;
            }

            return false;
          },
        }));

        return (
          <div className="dropdown-suggestion">
            {props.items.length ? (
              props.items.map((item: any, index: number) => (
                <a
                  className={index === selectedIndex ? 'is-selected' : ''}
                  key={index}
                  onClick={() => selectItem(index)}
                >
                  {item.label}
                </a>
              ))
            ) : (
              <div className="item">No result</div>
            )}
          </div>
        );
      });

      extensions.push(
        Mention.configure({
          renderHTML({ node, options }) {
            return [
              'span',
              {
                'data-id': node.attrs.id,
                class: 'mention',
              },
              `${options.suggestion.char}${node.attrs.label}`,
            ];
          },
          suggestion: {
            items: ({ query }: { query: string }) => {
              return mergedConfig.getSuggestion
                ? mergedConfig.getSuggestion(query)
                : [];
            },
            render() {
              let component: any;
              let popup: any;

              return {
                onStart(props: SuggestionProps) {
                  component = new ReactRenderer(Content, {
                    props,
                    editor: props.editor,
                  });

                  // @ts-ignore
                  popup = tippy('body', {
                    getReferenceClientRect: props.clientRect,
                    appendTo: () => document.body,
                    content: component.element,
                    showOnCreate: true,
                    interactive: true,
                    trigger: 'manual',
                    placement: 'bottom-start',
                  });
                },
                onUpdate(props: SuggestionProps) {
                  component.updateProps(props);

                  if (!props.clientRect) {
                    return;
                  }

                  popup?.[0]?.setProps({
                    getReferenceClientRect: props.clientRect,
                  });
                },

                onKeyDown(props: SuggestionKeyDownProps) {
                  if (props.event.key === 'Escape') {
                    popup?.[0]?.hide();

                    return true;
                  }

                  return component.ref?.onKeyDown(props);
                },
                onExit() {
                  popup?.[0]?.destroy();
                  component?.destroy();
                },
              };
            },
          },
        }),
      );
    }

    if (mergedConfig.menubar.includes('blockquote')) {
      extensions.push(Blockquote);
    }

    if (
      mergedConfig.menubar.includes('bullet-list') ||
      mergedConfig.menubar.includes('ordered-list')
    ) {
      extensions.push(ListItem);
    }

    if (mergedConfig.menubar.includes('bullet-list')) {
      extensions.push(BulletList);
    }

    if (mergedConfig.menubar.includes('ordered-list')) {
      extensions.push(OrderedList);
    }

    if (mergedConfig.menubar.includes('code-block')) {
      extensions.push(CodeBlock);
    }

    if (
      mergedConfig.menubar.find((a) =>
        ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(a),
      )
    ) {
      extensions.push(Heading);
    }

    if (mergedConfig.menubar.includes('text-align')) {
      extensions.push(
        TextAlign.configure({
          types: ['paragraph'],
        }),
      );
    }

    return extensions;
  }, [mergedConfig]);

  const editor = useEditor({
    extensions,
    content: value,
  });

  if (!editor) {
    return null;
  }

  editor.on('update', (e) => {
    if (onChange) {
      onChange(e.editor.getHTML());
    }
  });

  const store = {
    editor,
    config: mergedConfig,
  };

  return (
    <EditorProvider store={store}>
      <div
        className={`editor ${mergedConfig.className || ''}`}
      >
        <EditorContent onFocus={onFocus} onBlur={onBlur} />

        <EditorMenu items={mergedConfig.menubar} />
      </div>
    </EditorProvider>
  )
}