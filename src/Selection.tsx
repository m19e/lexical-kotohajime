import type { ComponentProps, FC } from "react";
import { $getRoot, $getSelection } from "lexical";
import type { EditorState, LexicalEditor } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import { AutoFocusPlugin } from "@/plugins/AutoFocusPlugin";

import styles from "@/Editor.module.scss";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "LexicalEditor",
  onError: (error) => console.error(error),
};

export const Selection: FC = () => {
  const handleEditorChange = (
    editorState: EditorState,
    editor: LexicalEditor
  ) => {
    editorState.read(() => {
      const root = $getRoot();
      const selection = $getSelection();

      console.log(selection);
    });
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div
        className={styles.editorContainer}
        style={{ writingMode: "vertical-rl" }}
      >
        <PlainTextPlugin
          contentEditable={
            <ContentEditable className={styles.contentEditable} />
          }
          placeholder={<Placeholder />}
        />
        <OnChangePlugin onChange={handleEditorChange} />
        <HistoryPlugin />
        <AutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
};

const Placeholder = () => {
  return <div className={styles.placeholder}>いまどうしてる？</div>;
};
