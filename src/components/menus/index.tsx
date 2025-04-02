import React from 'react';
import {
  Blockquote,
  Bold,
  BulletList,
  CodeBlock,
  Heading,
  Italic,
  Link,
  OrderedList,
  Strike,
  Underline,
  TextAlign,
  Image,
  Separation,
  Mention,
} from './components';
import { MenuItem, MenuItems } from '../../types';

const EditorMenu = ({ items }: { items: MenuItems }) => {
  return (
    <div className="editor-menu">
      {items.map((name, i) => (
        <Item key={i} name={name} />
      ))}
    </div>
  );
};

const Item = ({ name }: { name: MenuItem }) => {
  if (name === 'bold') {
    return <Bold />;
  }

  if (name === 'italic') {
    return <Italic />;
  }

  if (name === 'underline') {
    return <Underline />;
  }

  if (name === 'strike') {
    return <Strike />;
  }

  if (name === 'h1') {
    return <Heading level={1} />;
  }

  if (name === 'h2') {
    return <Heading level={2} />;
  }

  if (name === 'h3') {
    return <Heading level={3} />;
  }

  if (name === 'h4') {
    return <Heading level={4} />;
  }

  if (name === 'h5') {
    return <Heading level={5} />;
  }

  if (name === 'h6') {
    return <Heading level={6} />;
  }

  if (name === 'link') {
    return <Link />;
  }

  if (name === 'image') {
    return <Image />;
  }

  if (name === 'mention') {
    return <Mention />;
  }

  if (name === 'bullet-list') {
    return <BulletList />;
  }

  if (name === 'ordered-list') {
    return <OrderedList />;
  }

  if (name === 'blockquote') {
    return <Blockquote />;
  }

  if (name === 'code-block') {
    return <CodeBlock />;
  }

  if (name === 'text-align') {
    return <TextAlign />;
  }

  return <Separation />;
};

export default EditorMenu;
