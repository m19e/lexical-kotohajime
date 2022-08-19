import { useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

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

  return <div className={styles.inlineToolbar}></div>;
};
