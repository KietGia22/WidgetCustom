import { useClock } from "../../hooks/useClock";
import { clockWidgetStyles } from "../../styles/clockWidget.styles";

export function ClockWidget() {
  const time = useClock();
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div style={clockWidgetStyles.clockWidget}>
      <div style={clockWidgetStyles.clockTime}>
        {pad(time.getHours())}
        <span style={clockWidgetStyles.clockColon}>:</span>
        {pad(time.getMinutes())}
        <span style={clockWidgetStyles.clockSeconds}>:{pad(time.getSeconds())}</span>
      </div>
      <div style={clockWidgetStyles.clockDate}>
        {time.toLocaleDateString("vi-VN", {
          weekday: "long",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        })}
      </div>
    </div>
  );
}