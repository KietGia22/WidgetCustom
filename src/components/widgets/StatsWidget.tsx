import { useSparkline } from "../../hooks/useSparkLine";
import { Sparkline } from "../ui/SparkLine";
import { statsWidgetStyles } from "../../styles/statsWidget.styles";

export function StatsWidget() {
  const cpuData = useSparkline(20);
  const memData = useSparkline(20);

  return (
    <div style={statsWidgetStyles.statsWidget}>
      <div style={statsWidgetStyles.statRow}>
        <div>
          <div style={statsWidgetStyles.statLabel}>CPU Usage</div>
          <div style={{ ...statsWidgetStyles.statValue, color: "#10b981" }}>{cpuData.at(-1)}%</div>
        </div>
        <Sparkline data={cpuData} color="#10b981" />
      </div>
      <div style={statsWidgetStyles.statDivider} />
      <div style={statsWidgetStyles.statRow}>
        <div>
          <div style={statsWidgetStyles.statLabel}>Memory</div>
          <div style={{ ...statsWidgetStyles.statValue, color: "#f59e0b" }}>{memData.at(-1)}%</div>
        </div>
        <Sparkline data={memData} color="#f59e0b" />
      </div>
    </div>
  );
}