export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "highlight"; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };
