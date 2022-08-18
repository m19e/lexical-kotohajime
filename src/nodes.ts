import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import type { Klass, LexicalNode } from "lexical";

export const nodes: Klass<LexicalNode>[] = [HeadingNode, QuoteNode];
