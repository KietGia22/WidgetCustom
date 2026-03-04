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
        defaultSize: { w: 2, h: 2 },
        color: "#3b82f6",
    },
    clock: {
        type: "clock",
        label: "Clock",
        icon: "🕐",
        description: "Real-time digital clock",
        defaultSize: { w: 1, h: 1 },
        color: "#f59e0b",
    },
    stats: {
        type: "stats",
        label: "System Stats",
        icon: "📊",
        description: "Simulated metrics chart",
        defaultSize: { w: 2, h: 1 },
        color: "#10b981",
    },
    quote: {
        type: "quote",
        label: "Quote",
        icon: "💬",
        description: "Daily inspirational quote",
        defaultSize: { w: 2, h: 1 },
        color: "#ef4444",
    },
    activity: {
        type: "activity",
        label: "Activity",
        icon: "📈",
        description: "Recent activity feed",
        defaultSize: { w: 1, h: 2 },
        color: "#06b6d4",
    },
    network: {
        type: "network",
        label: "Network Status",
        icon: "📈",
        description: "Latency, uptime & packet loss",
        defaultSize: { w: 4, h: 2 },
        color: "#8b5cf6",
    },
    threat: {
        type: "threat",
        label: "Threat Monitor",
        icon: "📊",
        description: "Live threat detection overview",
        defaultSize: { w: 2, h: 1 },
        color: "#10b981",
    },
};

export const DEFAULT_LAYOUT: WidgetInstance[] = [
    { id: "w1", type: "clock", col: 1, row: 1 },
    { id: "w2", type: "weather", col: 2, row: 1 },
    { id: "w7", type: "network", col: 3, row: 2 },
    { id: "w8", type: "threat", col: 4, row: 2 },
];