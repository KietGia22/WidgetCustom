import type { CSSProperties } from "react";
import { token } from "./tokens";

export const weatherCardStyles: Record<string, CSSProperties> = {
  country:   { fontSize: 12, color: token.textMuted, fontWeight: 400 },
  hint: { fontSize: 11, color: token.textMuted, textAlign: "center", opacity: 0.6 },
  card: { display: "flex", flexDirection: "column", gap: 12 },
  center: { display: "flex", gap: 8, alignItems: "center", justifyContent: "center", padding: "20px 0", fontSize: 13 },
  weatherWidget: { display: "flex", flexDirection: "column", gap: 12 },
  weatherTop: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" },
  weatherCity: { fontSize: 15, fontWeight: 600, color: "#e2e8f0" },
  weatherCondition: { fontSize: 12, color: token.textMuted, marginTop: 2, textTransform: "capitalize" },
  weatherTempBlock: { display: "flex", alignItems: "center", gap: 6 },
  weatherIcon: { fontSize: 28 },
  weatherTemp: { fontSize: 32, fontWeight: 700, color: "#fbbf24" },
  weatherMeta: {
      display: "flex",
      gap: 14,
      fontSize: 12,
      color: token.textDim,
      background: "rgba(255,255,255,0.03)",
      borderRadius: 8,
      padding: "8px 12px",
  },
  weatherForecast: { display: "flex", justifyContent: "space-between" },
  forecastItem: { textAlign: "center", fontSize: 12 },
  forecastDay: { color: token.textMuted, marginBottom: 4 },
  forecastTemps: { marginTop: 4, fontSize: 11 },
};
