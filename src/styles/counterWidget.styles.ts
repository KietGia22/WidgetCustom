import type { CSSProperties } from "react";
import { token } from "./tokens";

export const counterWidgetStyles: Record<string, CSSProperties> = {
  wrapper: {
    textAlign: "center",
    padding: "8px 0",
    border: "1px solid",
    borderRadius: 10,
    background: "rgba(255,255,255,0.02)",
  },
  value: {
    fontSize: 36,
    fontWeight: 700,
    letterSpacing: "-1px",
    margin: "8px 0 4px",
  },
  label: { fontSize: 12, color: token.textMuted },
};
