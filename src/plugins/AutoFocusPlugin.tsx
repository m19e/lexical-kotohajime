import { useEffect } from "react";
import type { FC } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export const AutoFocusPlugin: FC = () => {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    editor.focus();
  }, [editor]);

  return null;
};
