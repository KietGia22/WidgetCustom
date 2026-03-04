import type { CSSProperties } from "react";
import { token } from "./tokens";

export const threatStyles: Record<string, CSSProperties> = {
    wrapper: { display: "flex", flexDirection: "column", gap: 12 },
    topRow: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
    badge: {
        display: "flex", alignItems: "center", gap: 6,
        background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.3)",
        borderRadius: 20, padding: "3px 10px", fontSize: 11, color: "#f87171",
    },
    dot: {
        width: 6, height: 6, borderRadius: "50%", background: "#ef4444",
        boxShadow: "0 0 6px #ef4444",
        animation: "pulse 1.5s infinite",
    },
    counters: { display: "flex", gap: 8 },
    counter: {
        flex: 1, background: "rgba(255,255,255,0.03)", border: `1px solid ${token.border}`,
        borderRadius: 10, padding: "10px 12px", textAlign: "center",
    },
    counterValue: { fontSize: 22, fontWeight: 700 },
    counterLabel: { fontSize: 10, color: token.textMuted, marginTop: 2, textTransform: "uppercase", letterSpacing: 0.5 },
    severityRow: { display: "flex", gap: 6 },
    severityItem: {
        flex: 1, borderRadius: 8, padding: "6px 8px",
        display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 11,
    },
};
