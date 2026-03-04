import type { CSSProperties } from "react";
import { token } from "./tokens";

export const activityCardStyles: Record<string, CSSProperties> = {
  card:      { display: "flex", flexDirection: "column", gap: 10 },
  titleRow:  { display: "flex", alignItems: "center", justifyContent: "space-between" },
  title:     { fontSize: 11, color: token.textMuted, textTransform: "uppercase", letterSpacing: 1 },
  manageBtn: {
    background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.3)",
    color: "#3b82f6", fontSize: 11, borderRadius: 6, padding: "3px 10px",
    cursor: "pointer", fontFamily: token.font,
  },
  list:  { display: "flex", flexDirection: "column", gap: 10 },
  empty: { fontSize: 12, color: token.textMuted, textAlign: "center", padding: "12px 0" },
  item:  { display: "flex", gap: 10, alignItems: "flex-start" },
  dot: {
    width: 28, height: 28, borderRadius: "50%", display: "flex",
    alignItems: "center", justifyContent: "center", fontSize: 13, flexShrink: 0, opacity: 0.85,
  },
  text: { fontSize: 12, color: "#cbd5e1" },
  time: { fontSize: 11, color: token.textMuted, marginTop: 2 },
};

export const activityPanelStyles: Record<string, CSSProperties> = {
  overlay: {
    position: "fixed", inset: 0,
    background: "rgba(0,0,0,0.5)", zIndex: 300, backdropFilter: "blur(4px)",
  },
  panel: {
    position: "fixed", top: 0, right: 0, width: 360, height: "100vh",
    background: token.surface, borderLeft: `1px solid ${token.border}`,
    zIndex: 301, display: "flex", flexDirection: "column",
    boxShadow: "-20px 0 60px rgba(0,0,0,0.5)",
  },
  header: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    padding: "20px 24px", borderBottom: `1px solid ${token.border}`,
  },
  headerTitle: {
    color: "white"
  },
  title:    { fontSize: 16, fontWeight: 600, color: token.text },
  closeBtn: { background: "none", border: "none", color: token.textMuted, fontSize: 22, cursor: "pointer" },
  body:     { padding: 24, display: "flex", flexDirection: "column", gap: 14, overflowY: "auto" },
  label:    { fontSize: 11, color: token.textMuted, textTransform: "uppercase", letterSpacing: 1 },
  inputRow: { display: "flex", gap: 8 },
  input: {
    flex: 1, background: "rgba(255,255,255,0.05)", border: `1px solid ${token.border}`,
    borderRadius: 8, padding: "10px 14px", color: token.text, fontSize: 13,
    outline: "none", fontFamily: token.font,
  },
  addBtn: {
    background: "#10b981", color: "#fff", border: "none", borderRadius: 8,
    padding: "10px 16px", fontSize: 13, cursor: "pointer", fontFamily: token.font, fontWeight: 600,
  },
  list:  { display: "flex", flexDirection: "column", gap: 8 },
  empty: { fontSize: 12, color: token.textMuted, textAlign: "center", padding: "20px 0" },
  item: {
    display: "flex", alignItems: "center", gap: 10,
    background: "rgba(255,255,255,0.03)", borderRadius: 10, padding: "10px 12px",
    border: `1px solid ${token.border}`,
  },
  dot: {
    width: 30, height: 30, borderRadius: "50%", display: "flex",
    alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0,
  },
  itemContent: { flex: 1 },
  itemText:    { fontSize: 13, color: token.text },
  itemTime:    { fontSize: 11, color: token.textMuted, marginTop: 2 },
  deleteBtn: {
    background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)",
    color: "#f87171", fontSize: 16, borderRadius: 6, width: 28, height: 28,
    cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
    flexShrink: 0,
  },
};
