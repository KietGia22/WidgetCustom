import type { CSSProperties } from "react";
import { token } from "./tokens";

export const styles: Record<string, CSSProperties> = {
  root: {
      minHeight: "100vh",
      background: token.bg,
      color: token.text,
      fontFamily: token.font,
      position: "relative",
      overflowX: "hidden",
  },
  bgGrid: {
      position: "fixed",
      inset: 0,
      backgroundImage: `
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
  `,
      backgroundSize: "48px 48px",
      pointerEvents: "none",
      zIndex: 0,
  },

  // Topbar
  topbar: {
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 32px",
      background: "rgba(7,13,26,0.85)",
      backdropFilter: "blur(16px)",
      borderBottom: `1px solid ${token.border}`,
  },
  topbarLeft: { display: "flex", alignItems: "center", gap: 20 },
  topbarRight: { display: "flex", gap: 10 },
  logo: {
      fontWeight: 700,
      fontSize: 18,
      letterSpacing: "-0.5px",
      display: "flex",
      alignItems: "center",
      gap: 8,
  },
  logoDot: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "#3b82f6",
      boxShadow: "0 0 10px #3b82f6aa",
      display: "inline-block",
  },
  logoSub: { color: token.textMuted, fontWeight: 400 },
  widgetCount: {
      fontSize: 12,
      color: token.textMuted,
      background: "rgba(255,255,255,0.05)",
      padding: "4px 10px",
      borderRadius: 20,
      border: `1px solid ${token.border}`,
  },
  btnPrimary: {
      background: "#3b82f6",
      color: "#fff",
      border: "none",
      borderRadius: token.radiusSm,
      padding: "8px 18px",
      fontSize: 13,
      fontFamily: token.font,
      cursor: "pointer",
      fontWeight: 600,
      letterSpacing: "0.3px",
  },
  btnOutline: {
      background: "transparent",
      color: token.textDim,
      border: `1px solid ${token.border}`,
      borderRadius: token.radiusSm,
      padding: "8px 16px",
      fontSize: 13,
      fontFamily: token.font,
      cursor: "pointer",
  },

  // Grid
  main: {
      position: "relative",
      zIndex: 1,
      padding: "28px 32px",
  },
  grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
      gap: 20,
      width: "100%",
  },
  empty: { textAlign: "center", paddingTop: 120 },
};
