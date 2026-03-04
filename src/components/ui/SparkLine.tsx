interface SparklineProps {
  data: number[];
  color: string;
}

export function Sparkline({ data, color }: SparklineProps) {
  const width = 220;
  const height = 60;
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const gradientId = `grad-${color.replace("#", "")}`;

  const toCoords = (v: number, i: number): string => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * (height - 8) - 4;
    return `${x},${y}`;
  };

  const linePoints = data.map(toCoords).join(" ");
  const areaPoints = [`0,${height}`, ...data.map(toCoords), `${width},${height}`].join(" ");

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }} viewBox={`0 0 ${width} ${height}`}  preserveAspectRatio="none">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradientId})`} />
      <polyline
        points={linePoints}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}