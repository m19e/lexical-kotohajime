import type { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

import styles from "@/Editor.module.scss";

import { nodes } from "@/nodes";

import { AutoFocusPlugin } from "@/plugins/AutoFocusPlugin";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "LexicalEditor",
  onError: (error) => console.error(error),
  nodes,
};

export const Editor: FC = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className={styles.editorContainer}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className={styles.contentEditable} />
          }
          placeholder={
            <div className={styles.placeholder}>What's happening?</div>
          }
        />
      </div>
      <AutoFocusPlugin />
      <HistoryPlugin />
    </LexicalComposer>
  );
};
