import type { CSSProperties } from "react";
import { token } from "./tokens";

export const networkStyles: Record<string, CSSProperties> = {
    wrapper: { display: "flex", flexDirection: "column", gap: 12 },
    metricsRow: { display: "flex", gap: 8 },
    metric: {
        flex: 1, background: "rgba(255,255,255,0.03)", border: `1px solid ${token.border}`,
        borderRadius: 10, padding: "10px 12px",
    },
    metricLabel: { fontSize: 10, color: token.textMuted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 4 },
    metricValue: { fontSize: 20, fontWeight: 700 },
    metricUnit: { fontSize: 11, color: token.textMuted, marginLeft: 2 },
    statusList: { display: "flex", flexDirection: "column", gap: 6 },
    statusItem: { display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12 },
    statusLeft: { display: "flex", alignItems: "center", gap: 7 },
    statusDot: { width: 7, height: 7, borderRadius: "50%", flexShrink: 0 },
    statusName: { color: token.textDim },
    statusBadge: {
        fontSize: 10, borderRadius: 5, padding: "2px 7px",
        fontWeight: 600, letterSpacing: 0.3,
    },
};
