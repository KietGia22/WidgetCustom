import type { WidgetInstance, WidgetMeta, WidgetType } from "../types/widget.types";


export const WIDGET_TYPES: Record<string, WidgetType> = {
    WEATHER: "weather",
    CLOCK: "clock",
    STATS: "stats",
    QUOTE: "quote",
    ACTIVITY: "activity",
    NETWORK: "network",
    THREAT: "threat"
};

export const WIDGET_REGISTRY: Record<WidgetType, WidgetMeta> = {
    weather: {
        type: "weather",
        label: "Weather",
        icon: "🌤",
        description: "Live weather for Ho Chi Minh City",
        color: "#3b82f6",
    },
    clock: {
        type: "clock",
        label: "Clock",
        icon: "🕐",
        description: "Real-time digital clock",
        color: "#f59e0b",
    },
    stats: {
        type: "stats",
        label: "System Stats",
        icon: "📊",
        description: "Simulated metrics chart",
        color: "#10b981",
    },
    quote: {
        type: "quote",
        label: "Quote",
        icon: "💬",
        description: "Daily inspirational quote",
        color: "#ef4444",
    },
    activity: {
        type: "activity",
        label: "Activity",
        icon: "📈",
        description: "Recent activity feed",
        color: "#06b6d4",
    },
    network: {
        type: "network",
        label: "Network Status",
        icon: "📈",
        description: "Latency, uptime & packet loss",
        color: "#8b5cf6",
    },
    threat: {
        type: "threat",
        label: "Threat Monitor",
        icon: "📊",
        description: "Live threat detection overview",
        color: "#10b981",
    },
};

export const DEFAULT_LAYOUT: WidgetInstance[] = [
    { id: "w1", type: "clock" },
    { id: "w2", type: "weather" },
    { id: "w7", type: "network" },
    { id: "w8", type: "threat" },
];