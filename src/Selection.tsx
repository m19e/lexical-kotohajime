import type { ComponentProps, FC } from "react";
import {
  $getSelection,
  $isRangeSelection,
  $createRangeSelection,
  $setSelection,
  KEY_ARROW_DOWN_COMMAND,
} from "lexical";
import type { EditorState, LexicalEditor } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";

import { AutoFocusPlugin } from "@/plugins/AutoFocusPlugin";
import { VerticalPlugin } from "@/plugins/VerticalPlugin";

import styles from "@/Editor.module.scss";

const initialConfig: ComponentProps<typeof LexicalComposer>["initialConfig"] = {
  namespace: "LexicalEditor",
  onError: (error) => console.error(error),
};

export const Selection: FC = () => {
  const handleEditorChange = (editorState: EditorState, _: LexicalEditor) => {
    editorState.read(() => {
      const selection = $getSelection();

      if ($isRangeSelection(selection)) {
        const anchor = {
          key: selection.anchor.key,
          offset: selection.anchor.offset,
          type: selection.anchor.type,
        };
        const focus = {
          key: selection.focus.key,
          offset: selection.focus.offset,
          type: selection.focus.type,
        };
        // console.log(JSON.stringify({ anchor, focus }, null, 2));
      }
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
        <VerticalPlugin />
        <AutoFocusPlugin />
      </div>
    </LexicalComposer>
  );
};

const Placeholder = () => {
  return <div className={styles.placeholder}>????????????????????????</div>;
};
