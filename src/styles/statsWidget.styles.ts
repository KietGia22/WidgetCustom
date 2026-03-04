import type { CSSProperties } from "react";
import { token } from "./tokens";

export const statsWidgetStyles: Record<string, CSSProperties> = {
  statsWidget: { display: "flex", flexDirection: "column", gap: 10 },
  statRow: { display: "flex", alignItems: "center", justifyContent: "space-between" },
  statLabel: { fontSize: 11, color: token.textMuted, marginBottom: 4 },
  statValue: { fontSize: 22, fontWeight: 700 },
  statDivider: { height: 1, background: token.border },
};
