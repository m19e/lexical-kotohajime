import type { ComponentProps, FC } from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { CheckListPlugin } from "@lexical/react/LexicalCheckListPlugin";

import styles from "@/Editor.module.scss";

import { nodes } from "@/nodes";
import { theme } from "@/editorTheme";

import { AutoFocusPlugin } from "@/plugins/AutoFocusPlugin";
import { ToolbarPlugin } from "@/plugins/ToolbarPlugin";
import { InlineToolbarPlugin } from "@/plugins/InlineToolbarPlugin";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "LexicalEditor",
  onError: (error) => console.error(error),
  nodes,
  theme,
};

export const Editor: FC = () => {
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolbarPlugin />
      <InlineToolbarPlugin />
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
      <ListPlugin />
      <CheckListPlugin />
    </LexicalComposer>
  );
};
