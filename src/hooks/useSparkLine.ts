import { useState, useEffect } from 'react';

export function useSparkline(points = 20): number[] {
    const [data, setData] = useState(() =>
        Array.from({ length: points }, () => Math.floor(Math.random() * 60) + 20)
    );

    useEffect(() => {
        const id = setInterval(() => {
            setData((prev) => {
                const next = [...prev.slice(1), Math.floor(Math.random() * 60) + 20];
                return next;
            });
        }, 1800);
        return () => clearInterval(id);
    }, []);

    return data;
}