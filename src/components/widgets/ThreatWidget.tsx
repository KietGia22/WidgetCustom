import { useState, useEffect } from "react";
import { threatStyles as s } from "../../styles/threatWidget.styles";

interface ThreatState {
  detected: number;
  blocked: number;
  critical: number;
  high: number;
  medium: number;
  low: number;
}

const INITIAL: ThreatState = {
  detected: 3847, blocked: 3829, critical: 2, high: 11, medium: 34, low: 78,
};

export function ThreatWidget() {
  const [data, setData] = useState<ThreatState>(INITIAL);

  // Simulate live updates every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setData((prev) => {
        const newDetected = prev.detected + Math.floor(Math.random() * 3);
        const newBlocked  = newDetected - Math.floor(Math.random() * 3 + 12);
        return {
          detected: newDetected,
          blocked:  newBlocked,
          critical: Math.max(0, prev.critical + (Math.random() > 0.85 ? 1 : Math.random() > 0.7 ? -1 : 0)),
          high:     Math.max(0, prev.high     + Math.floor(Math.random() * 3 - 1)),
          medium:   Math.max(0, prev.medium   + Math.floor(Math.random() * 5 - 2)),
          low:      Math.max(0, prev.low      + Math.floor(Math.random() * 7 - 3)),
        };
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const blockRate = ((data.blocked / data.detected) * 100).toFixed(1);

  const severity = [
    { label: "Critical", count: data.critical, color: "#ef4444", bg: "rgba(239,68,68,0.1)" },
    { label: "High",     count: data.high,     color: "#f97316", bg: "rgba(249,115,22,0.1)" },
    { label: "Medium",   count: data.medium,   color: "#f59e0b", bg: "rgba(245,158,11,0.1)" },
    { label: "Low",      count: data.low,      color: "#10b981", bg: "rgba(16,185,129,0.1)" },
  ];

  return (
    <div style={s.wrapper}>
      <div style={s.topRow}>
        <div style={s.badge}>
          <span style={s.dot} />
          LIVE MONITORING
        </div>
        <span style={{ fontSize: 12, color: "#10b981", fontWeight: 600 }}>
          {blockRate}% blocked
        </span>
      </div>

      <div style={s.counters}>
        <div style={s.counter}>
          <div style={{ ...s.counterValue, color: "#f87171" }}>
            {data.detected.toLocaleString()}
          </div>
          <div style={s.counterLabel}>Detected</div>
        </div>
        <div style={s.counter}>
          <div style={{ ...s.counterValue, color: "#10b981" }}>
            {data.blocked.toLocaleString()}
          </div>
          <div style={s.counterLabel}>Blocked</div>
        </div>
        <div style={s.counter}>
          <div style={{ ...s.counterValue, color: "#f59e0b" }}>
            {(data.detected - data.blocked).toLocaleString()}
          </div>
          <div style={s.counterLabel}>Passed</div>
        </div>
      </div>

      <div style={s.severityRow}>
        {severity.map((item) => (
          <div key={item.label} style={{ ...s.severityItem, background: item.bg }}>
            <span style={{ color: item.color }}>{item.label}</span>
            <span style={{ color: item.color, fontWeight: 700 }}>{item.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
}