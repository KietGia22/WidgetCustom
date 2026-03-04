import type { CSSProperties } from "react";
import { token } from "./tokens";

export const quoteWidgetStyles: Record<string, CSSProperties> = {
  quoteWidget: { position: "relative", paddingTop: 4 },
  quoteText: { fontSize: 15, lineHeight: 1.7, color: "#cbd5e1", position: "relative", zIndex: 1, minHeight: 44 },
  quoteAuthor: { fontSize: 11, color: "#3b82f6", marginTop: 8 },
  quoteBtn: {
      background: "none",
      border: "none",
      color: token.textMuted,
      fontSize: 11,
      cursor: "pointer",
      padding: 0,
      marginTop: 8,
      fontFamily: token.font,
  },
};
