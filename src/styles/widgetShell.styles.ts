import type { CSSProperties } from "react";
import { token } from "./tokens";

export const widgetShellStyles: Record<string, CSSProperties> = {
  widgetShell: {
      background: token.surface,
      border: `1px solid ${token.border}`,
      borderRadius: token.radius,
      cursor: "grab",
      transition: "all 0.2s ease",
      boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
      display: "flex",
      flexDirection: "column",
  },
  widgetHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px",
      borderBottom: `1px solid ${token.border}`,
      background: "rgba(255,255,255,0.02)",
  },
  widgetHeaderLeft: { display: "flex", alignItems: "center", gap: 8 },
  widgetAccent: { width: 4, height: 14, borderRadius: 2, display: "inline-block" },
  widgetLabel: { fontSize: 12, color: token.textDim, letterSpacing: "0.5px", fontWeight: 500 },
  widgetActions: { display: "flex", alignItems: "center", gap: 8 },
  dragHandle: { color: token.textMuted, fontSize: 14, cursor: "grab", userSelect: "none", letterSpacing: 1 },
  removeBtn: {
      background: "transparent",
      border: "none",
      color: token.textMuted,
      fontSize: 18,
      cursor: "pointer",
      lineHeight: 1,
      padding: "0 2px",
      borderRadius: 4,
  },
  widgetBody: {
      padding: "16px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      flex: 1,
  },
};
