import { useState } from "react";
import { activityCardStyles, activityPanelStyles } from "../../styles/activityWidget.styles";
import { Portal } from "../ui/Portal";

interface ActivityItem {
  id: string,
  time: string;
  text: string;
  icon: string;
  color: string;
}

const ICONS = ["👤", "🚀", "⚠️", "💾", "🔍", "⚙️", "📝", "✅", "🔔", "📊"];
const COLORS = ["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#06b6d4", "#ef4444", "#94a3b8"];

function randomIcon() { return ICONS[Math.floor(Math.random() * ICONS.length)]; }
function randomColor() { return COLORS[Math.floor(Math.random() * COLORS.length)]; }
function nowLabel() { return "just now"; }

const DEFAULT_ACTIVITIES: ActivityItem[] = [
  { id: "a1", time: "2m ago",  text: "New user registered", icon: "👤", color: "#3b82f6" },
  { id: "a2", time: "5m ago",  text: "Deploy completed",    icon: "🚀", color: "#10b981" },
  { id: "a3", time: "12m ago", text: "Alert: High CPU",     icon: "⚠️", color: "#f59e0b" },
  { id: "a4", time: "20m ago", text: "Backup finished",     icon: "💾", color: "#8b5cf6" },
  { id: "a5", time: "1h ago",  text: "Scan completed",      icon: "🔍", color: "#06b6d4" },
];

export function ActivityWidget() {
  const [activities, setActivities] = useState<ActivityItem[]>(DEFAULT_ACTIVITIES);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const addActivity = () => {
    if (!inputText.trim()) return;
    const newItem: ActivityItem = {
      id: `a${Date.now()}`,
      text: inputText.trim(),
      time: nowLabel(),
      icon: randomIcon(),
      color: randomColor(),
    };
    setActivities((prev) => [newItem, ...prev]);
    setInputText("");
  };

  const removeActivity = (id: string) => {
    setActivities((prev) => prev.filter((a) => a.id !== id));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") addActivity();
  };

  return (
    <>
      <div style={activityCardStyles.card}>
        <div style={activityCardStyles.titleRow}>
          <div style={activityCardStyles.title}>Recent Activity</div>
          <button style={activityCardStyles.manageBtn} onClick={() => setIsPanelOpen(true)}>
            Manage
          </button>
        </div>
        <div style={activityCardStyles.list}>
          {activities.length === 0 ? (
            <div style={activityCardStyles.empty}>No activities yet</div>
          ) : (
            activities.slice(0, 5).map((a) => (
              <div key={a.id} style={activityCardStyles.item}>
                <div style={{ ...activityCardStyles.dot, background: a.color }}>{a.icon}</div>
                <div style={activityCardStyles.content}>
                  <div style={activityCardStyles.text}>{a.text}</div>
                  <div style={activityCardStyles.time}>{a.time}</div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {isPanelOpen && (
        <Portal>
          <div style={activityPanelStyles.overlay} onClick={() => setIsPanelOpen(false)} />
          <div style={activityPanelStyles.panel}>
            <div style={activityPanelStyles.header}>
              <div style={activityPanelStyles.headerTitle}>📋 Manage Activities</div>
              <button style={activityPanelStyles.closeBtn} onClick={() => setIsPanelOpen(false)}>×</button>
            </div>
            <div style={activityPanelStyles.body}>
              {/* Add new */}
              <div style={activityPanelStyles.label}>Add new activity</div>
              <div style={activityPanelStyles.inputRow}>
                <input
                  autoFocus
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="e.g. Deployment started..."
                  style={activityPanelStyles.input}
                />
                <button onClick={addActivity} style={activityPanelStyles.addBtn}>Add</button>
              </div>

              <div style={activityPanelStyles.label}>All activities ({activities.length})</div>
              <div style={activityPanelStyles.list}>
                {activities.length === 0 ? (
                  <div style={activityPanelStyles.empty}>No activities yet</div>
                ) : (
                  activities.map((a) => (
                    <div key={a.id} style={activityPanelStyles.item}>
                      <div style={{ ...activityPanelStyles.dot, background: a.color }}>{a.icon}</div>
                      <div style={activityPanelStyles.itemContent}>
                        <div style={activityPanelStyles.itemText}>{a.text}</div>
                        <div style={activityPanelStyles.itemTime}>{a.time}</div>
                      </div>
                      <button
                        style={activityPanelStyles.deleteBtn}
                        onClick={() => removeActivity(a.id)}
                        title="Delete"
                      >
                        ×
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
}