import type { ComponentType } from "react";
import type { WidgetInstance } from "../../types/widget.types";
import { WIDGET_REGISTRY } from "../../constants/widgets";
import { widgetShellStyles } from "../../styles/widgetShell.styles";
import { ClockWidget }    from "../widgets/ClockWidget";
import { WeatherWidget }  from "../widgets/WeatherWidget";
import { StatsWidget } from "../widgets/StatsWidget";
import { QuoteWidget } from "../widgets/QuoteWidget";
import { ActivityWidget } from "../widgets/ActivityWidget";
import { NetworkWidget } from "../widgets/NetworkWidget";
import { ThreatWidget } from "../widgets/ThreatWidget";

const WIDGET_COMPONENTS: Record<string, ComponentType> = {
  clock:    ClockWidget,
  weather:  WeatherWidget,
  stats:    StatsWidget,
  quote:    QuoteWidget,
  activity: ActivityWidget,
  network: NetworkWidget,
  threat: ThreatWidget
};

interface WidgetShellProps {
  widget: WidgetInstance;
  isDragging: boolean;
  onRemove: (id: string) => void;
  onDragStart: (id: string) => void;
  onDrop: (id: string) => void;
  onDragEnd: () => void;
}

export function WidgetShell({
  widget,
  isDragging,
  onRemove,
  onDragStart,
  onDrop,
  onDragEnd,
}: WidgetShellProps) {
  const meta = WIDGET_REGISTRY[widget.type];
  const Component = WIDGET_COMPONENTS[widget.type];

  return (
    <div
      draggable
      onDragStart={() => onDragStart(widget.id)}
      onDragOver={(e) => e.preventDefault()}
      onDrop={() => onDrop(widget.id)}
      onDragEnd={onDragEnd}
      style={{
        ...widgetShellStyles.widgetShell,
        opacity: isDragging ? 0.4 : 1,
        borderColor: isDragging ? meta.color : "rgba(255,255,255,0.08)",
        transform: isDragging ? "scale(0.97)" : "scale(1)",
      }}
    >
      <div style={widgetShellStyles.widgetHeader}>
        <div style={widgetShellStyles.widgetHeaderLeft}>
          <span style={{ ...widgetShellStyles.widgetAccent, background: meta.color }} />
          <span style={widgetShellStyles.widgetLabel}>{meta.icon} {meta.label}</span>
        </div>
        <div style={widgetShellStyles.widgetActions}>
          <div style={widgetShellStyles.dragHandle} title="Drag to reorder">⠿</div>
          <button
            style={widgetShellStyles.removeBtn}
            onClick={() => onRemove(widget.id)}
            title="Remove widget"
          >
            ×
          </button>
        </div>
      </div>
      <div style={widgetShellStyles.widgetBody}>
        <Component />
      </div>
    </div>
  );
}