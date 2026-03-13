import { useState, useCallback } from 'react';
import { DEFAULT_LAYOUT } from '../constants/widgets';
import type { WidgetInstance, WidgetType } from '../types/widget.types';

interface UseDashboardReturn {
    widgets: WidgetInstance[];
    draggingId: string | null;
    isPanelOpen: boolean;
    setIsPanelOpen: (open: boolean) => void;
    addWidget: (type: WidgetType) => void;
    removeWidget: (id: string) => void;
    resetLayout: () => void;
    handleDragStart: (id: string) => void;
    handleDrop: (targetId: string) => void;
    handleDragEnd: () => void;
}

export function useDashboard(): UseDashboardReturn {
    const [widgets, setWidgets] = useState<WidgetInstance[]>(DEFAULT_LAYOUT);
    const [draggingId, setDraggingId] = useState<string | null>(null);
    const [isPanelOpen, setIsPanelOpen] = useState(false);

    const addWidget = useCallback((type: WidgetType) => {
        if(widgets.some((w) => w.type === type))
            return;
        const newWidget = {
            id: `w${Date.now()}`,
            type
        };
        setWidgets((prev) => [...prev, newWidget]);
        setIsPanelOpen(false);
    }, [widgets]);

    const removeWidget = useCallback((id: string) => {
        setWidgets((prev) => prev.filter((w) => w.id !== id));
    }, []);

    const resetLayout = useCallback(() => {
        setWidgets(DEFAULT_LAYOUT);
    }, []);

    const handleDragStart = useCallback((id:string) => {
        setDraggingId(id);
    }, []);

    const handleDrop = useCallback((targetId:string) => {
        if (!draggingId || draggingId === targetId) return;
        setWidgets((prev) => {
            const dragIdx = prev.findIndex((w) => w.id === draggingId);
            const targetIdx = prev.findIndex((w) => w.id === targetId);
            const next = [...prev];
            [next[dragIdx], next[targetIdx]] = [next[targetIdx], next[dragIdx]];
            return next;
        });
        setDraggingId(null);
    }, [draggingId]);

    const handleDragEnd = useCallback(() => {
        setDraggingId(null);
    }, []);

    return {
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
    };
}