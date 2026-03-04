export type WidgetType = "weather" | "clock" | "stats" | "quote" | "activity" | "network" | "threat";

export interface WidgetMeta {
    type: WidgetType;
    label: string;
    icon: string;
    description: string;
    defaultSize: { w: number; h: number };
    color: string;
}

export interface WidgetInstance {
    id: string;
    type: WidgetType;
    col: number;
    row: number;
}