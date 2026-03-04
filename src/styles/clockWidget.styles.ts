import type { CSSProperties } from "react";
import { token } from "./tokens";

export const clockWidgetStyles: Record<string, CSSProperties> = {
  clockWidget: { textAlign: "center", padding: "8px 0" },
  clockTime: {
      fontSize: 42,
      fontWeight: 700,
      letterSpacing: "-2px",
      color: "#f1f5f9",
  },
  clockColon: { color: "#3b82f6" },
  clockSeconds: { fontSize: 26, color: token.textMuted },
  clockDate: { fontSize: 12, color: token.textMuted, marginTop: 6 },
};
