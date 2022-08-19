import { useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { FORMAT_TEXT_COMMAND } from "lexical";
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatUnderlined,
  MdSubscript,
  MdSuperscript,
} from "react-icons/all";

import styles from "@/plugins/InlineToolbarPlugin.module.scss";

export const InlineToolbarPlugin = () => {
  const [editor] = useLexicalComposerContext();

  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [isSubscript, setIsSubscript] = useState(false);
  const [isSuperscript, setIsSuperscript] = useState(false);

  return (
    <div className={styles.inlineToolbar}>
      <button
        type="button"
        aria-label="format bold"
        role="checkbox"
        aria-checked={isBold}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
      >
        <MdFormatBold />
      </button>
      <button
        type="button"
        aria-label="format underline"
        role="checkbox"
        aria-checked={isUnderline}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")}
      >
        <MdFormatUnderlined />
      </button>
      <button
        type="button"
        aria-label="format strikethrough"
        role="checkbox"
        aria-checked={isStrikethrough}
        onClick={() =>
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
        }
      >
        <MdFormatStrikethrough />
      </button>
      <button
        type="button"
        aria-label="format italic"
        role="checkbox"
        aria-checked={isItalic}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
      >
        <MdFormatItalic />
      </button>
      <button
        type="button"
        aria-label="format code"
        role="checkbox"
        aria-checked={isCode}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")}
      >
        <MdCode />
      </button>
      <button
        type="button"
        aria-label="format subscript"
        role="checkbox"
        aria-checked={isSubscript}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "subscript")}
      >
        <MdSubscript />
      </button>
      <button
        type="button"
        aria-label="format superscript"
        role="checkbox"
        aria-checked={isSuperscript}
        onClick={() =>
          editor.dispatchCommand(FORMAT_TEXT_COMMAND, "superscript")
        }
      >
        <MdSuperscript />
      </button>
    </div>
  );
};