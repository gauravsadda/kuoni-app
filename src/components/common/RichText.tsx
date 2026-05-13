import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { Document as RichTextDocument } from "@contentful/rich-text-types";

import DOMPurify from "isomorphic-dompurify";

type RichTextProps = {
  document: RichTextDocument | null | undefined;
};

const options: Options = {
  renderText: (text) => {
    // Sanitize all text nodes
    return DOMPurify.sanitize(text, {
      ALLOWED_TAGS: [],
      ALLOWED_ATTR: [],
    });
  },

  renderNode: {
    hyperlink: (node, children) => {
      const url = node.data.uri;

      // Allow only safe protocols
      const isSafe =
        url.startsWith("https://") ||
        url.startsWith("http://") ||
        url.startsWith("/");

      if (!isSafe) {
        return null;
      }

      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
};

const RichText = ({ document }: RichTextProps) => {
  if (!document) return null;

  return <>{documentToReactComponents(document, options)}</>;
};

export default RichText;
