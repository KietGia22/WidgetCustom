import type { WidgetInstance, WidgetType } from "../../types/widget.types";
import { WIDGET_REGISTRY } from "../../constants/widgets";
import { addWidgetPanelStyles } from "../../styles/addWidgetPanel.styles";
import { token } from "../../styles/tokens";

interface AddWidgetPanelProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (type: WidgetType) => void;
  activeWidgets: WidgetInstance[]
}

export function AddWidgetPanel({ isOpen, onClose, onAdd, activeWidgets }: AddWidgetPanelProps) {
  if (!isOpen) return null;
  const activeTypes = new Set(activeWidgets.map((w) => w.type))

  return (
    <>
      <div style={addWidgetPanelStyles.overlay} onClick={onClose} />
      <div style={addWidgetPanelStyles.panel}>
        <div style={addWidgetPanelStyles.panelHeader}>
          <div style={addWidgetPanelStyles.panelTitle}>Add Widget</div>
          <button style={addWidgetPanelStyles.panelClose} onClick={onClose}>×</button>
        </div>
        <div style={addWidgetPanelStyles.panelBody}>
          {Object.values(WIDGET_REGISTRY).map((w) => {
              const isActive = activeTypes.has(w.type);
              return (
                <div
                  key={w.type}
                  style={addWidgetPanelStyles.panelItem}
                  onClick={() => onAdd(w.type)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.borderColor = w.color + "66";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.02)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  }}
                >
                  <div
                    style={{
                      ...addWidgetPanelStyles.panelItemIcon,
                      background: w.color + "22",
                      color: w.color,
                    }}
                  >
                    {w.icon}
                  </div>
                  <div>
                    <div style={addWidgetPanelStyles.panelItemLabel}>{w.label}</div>
                    <div style={addWidgetPanelStyles.panelItemDesc}>{w.description}</div>
                  </div>
                  {isActive && (
                  <span style={{ fontSize: 10, color: token.textMuted, flexShrink: 0 }}>
                    Added
                  </span>
                )}
                </div>
              )
          })}
        </div>
      </div>
    </>
  );
}