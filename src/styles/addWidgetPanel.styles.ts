import type { CSSProperties } from "react";
import { token } from "./tokens";

export const addWidgetPanelStyles: Record<string, CSSProperties> = {
  overlay: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      zIndex: 200,
      backdropFilter: "blur(4px)",
  },
  panel: {
      position: "fixed",
      top: 0,
      right: 0,
      width: 320,
      height: "100vh",
      background: token.surface,
      borderLeft: `1px solid ${token.border}`,
      zIndex: 201,
      display: "flex",
      flexDirection: "column",
      boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
  },
  panelHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "20px 24px",
      borderBottom: `1px solid ${token.border}`,
  },
  panelTitle: { fontSize: 16, fontWeight: 600 },
  panelClose: { background: "none", border: "none", color: token.textMuted, fontSize: 22, cursor: "pointer" },
  panelBody: { padding: "16px", overflowY: "auto", display: "flex", flexDirection: "column", gap: 10 },
  panelItem: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px",
      borderRadius: token.radiusSm,
      border: `1px solid rgba(255,255,255,0.08)`,
      background: "rgba(255,255,255,0.02)",
      cursor: "pointer",
      transition: "all 0.15s",
  },
  panelItemIcon: { width: 40, height: 40, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 },
  panelItemLabel: { fontSize: 13, fontWeight: 600, color: "#e2e8f0" },
  panelItemDesc: { fontSize: 11, color: token.textMuted, marginTop: 2 },
};
