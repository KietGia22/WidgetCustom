import { useDashboard } from "./hooks/useDashboard";
import { WidgetShell } from "./components/ui/WIdgetShell";
import { AddWidgetPanel } from "./components/ui/AddWidgetPanel";
import { styles } from "./styles/app.styles";

export default function App() {
  const {
    widgets,
    draggingId,
    isPanelOpen,
    setIsPanelOpen,
    addWidget,
    removeWidget,
    resetLayout,
    handleDragStart,
    handleDrop,
    handleDragEnd,
  } = useDashboard();

  return (
    <div style={styles.root}>
      <div style={styles.bgGrid} />

      <header style={styles.topbar}>
        <div style={styles.topbarLeft}>
          <div style={styles.logo}>
            <span style={styles.logoDot} />
            OPSWAT <span style={styles.logoSub}>Dashboard</span>
          </div>
          <div style={styles.widgetCount}>{widgets.length} widgets active</div>
        </div>
        <div style={styles.topbarRight}>
          <button style={styles.btnOutline} onClick={resetLayout}>↺ Reset Layout</button>
          <button style={styles.btnPrimary} onClick={() => setIsPanelOpen(true)}>+ Add Widget</button>
        </div>
      </header>

      <main style={styles.main}>
        {widgets.length === 0 ? (
          <div style={styles.empty}>
            <div style={{ fontSize: 48 }}>📭</div>
            <div style={{ color: "#64748b", marginTop: 12 }}>No widgets. Add some above.</div>
          </div>
        ) : (
          <div style={styles.grid}>
            {widgets.map((widget) => (
              <WidgetShell
                key={widget.id}
                widget={widget}
                isDragging={draggingId === widget.id}
                onRemove={removeWidget}
                onDragStart={handleDragStart}
                onDrop={handleDrop}
                onDragEnd={handleDragEnd}
              />
            ))}
          </div>
        )}
      </main>

      <AddWidgetPanel
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
        onAdd={addWidget}
        activeWidgets={widgets}
      />
    </div>
  );
}
