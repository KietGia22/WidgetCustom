import { useState, useEffect } from "react";
import { networkStyles as s } from "../../styles/networkWidget.styles";
import { Sparkline } from "../ui/SparkLine";

interface NetworkMetrics {
  latency: number;
  uptime: number;
  packetLoss: number;
}

interface ServiceStatus {
  name: string;
  status: "online" | "degraded" | "offline";
  latency: number;
}

const INITIAL_METRICS: NetworkMetrics = { latency: 12, uptime: 99.97, packetLoss: 0.02 };

const INITIAL_SERVICES: ServiceStatus[] = [
  { name: "API Gateway",    status: "online",   latency: 8  },
  { name: "Threat DB",      status: "online",   latency: 14 },
  { name: "Scan Engine",    status: "degraded", latency: 142 },
  { name: "Auth Service",   status: "online",   latency: 6  },
];

const STATUS_CFG = {
  online:   { label: "Online",   color: "#10b981", bg: "rgba(16,185,129,0.12)"  },
  degraded: { label: "Degraded", color: "#f59e0b", bg: "rgba(245,158,11,0.12)"  },
  offline:  { label: "Offline",  color: "#ef4444", bg: "rgba(239,68,68,0.12)"   },
};

export function NetworkWidget() {
  const [metrics, setMetrics]   = useState<NetworkMetrics>(INITIAL_METRICS);
  const [services, setServices] = useState<ServiceStatus[]>(INITIAL_SERVICES);

  useEffect(() => {
    const interval = setInterval(() => {
      const newLatency = Math.max(2, metrics.latency + Math.floor(Math.random() * 10 - 4));

      setMetrics((prev) => ({
        latency:    newLatency,
        uptime:     Math.min(100, Math.max(99.5, prev.uptime + (Math.random() * 0.02 - 0.01))),
        packetLoss: Math.max(0, parseFloat((prev.packetLoss + (Math.random() * 0.04 - 0.02)).toFixed(2))),
      }));

      if (Math.random() > 0.8) {
        setServices((prev) => prev.map((svc) => {
          if (Math.random() > 0.7) {
            const statuses: ServiceStatus["status"][] = ["online", "online", "online", "degraded"];
            return { ...svc, latency: Math.max(3, svc.latency + Math.floor(Math.random() * 20 - 8)), status: statuses[Math.floor(Math.random() * statuses.length)] };
          }
          return svc;
        }));
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [metrics.latency]);

  return (
    <div style={s.wrapper}>
      {/* Top metrics */}
      <div style={s.metricsRow}>
        <div style={s.metric}>
          <div style={s.metricLabel}>Latency</div>
          <div style={s.metricValue}>
            <span style={{ color: metrics.latency > 50 ? "#f59e0b" : "#10b981" }}>
              {metrics.latency}
            </span>
            <span style={s.metricUnit}>ms</span>
          </div>
        </div>
        <div style={s.metric}>
          <div style={s.metricLabel}>Uptime</div>
          <div style={s.metricValue}>
            <span style={{ color: "#10b981" }}>{metrics.uptime.toFixed(2)}</span>
            <span style={s.metricUnit}>%</span>
          </div>
        </div>
        <div style={s.metric}>
          <div style={s.metricLabel}>Packet Loss</div>
          <div style={s.metricValue}>
            <span style={{ color: metrics.packetLoss > 1 ? "#ef4444" : "#10b981" }}>
              {metrics.packetLoss.toFixed(2)}
            </span>
            <span style={s.metricUnit}>%</span>
          </div>
        </div>
      </div>

      {/* Service statuses */}
      <div style={s.statusList}>
        {services.map((svc) => {
          const cfg = STATUS_CFG[svc.status];
          return (
            <div key={svc.name} style={s.statusItem}>
              <div style={s.statusLeft}>
                <div style={{ ...s.statusDot, background: cfg.color, boxShadow: `0 0 5px ${cfg.color}` }} />
                <span style={s.statusName}>{svc.name}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ fontSize: 11, color: "#64748b" }}>{svc.latency}ms</span>
                <span style={{ ...s.statusBadge, background: cfg.bg, color: cfg.color }}>
                  {cfg.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}