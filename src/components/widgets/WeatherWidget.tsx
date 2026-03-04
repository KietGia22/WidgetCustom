import { weatherCardStyles } from "../../styles/weatherWidget.styles";
import { useWeather } from "../../hooks/useWeather";
import { token } from "../../styles/tokens";

export function WeatherWidget() {
  const { weather, status, error } = useWeather();

  if (status === "loading") return (
    <div style={weatherCardStyles.center}>🌐 <span style={{ color: token.textMuted }}>Loading weather...</span></div>
  );

  if (status === "error") return (
    <div style={weatherCardStyles.center}>⚠️ <span style={{ color: token.textMuted }}>{error}</span></div>
  );
  if (!weather) return null;

  return (
    <div style={weatherCardStyles.weatherWidget}>
      <div style={weatherCardStyles.weatherTop}>
        <div>
          <div style={weatherCardStyles.weatherCity}>{weather.city} <span style={weatherCardStyles.country}>{weather.country}</span></div>
          <div style={weatherCardStyles.weatherCondition}>{weather.condition}</div>
        </div>
        <div style={weatherCardStyles.weatherTempBlock}>
          <img src={weather.iconUrl} alt={weather.condition} width={48} height={48} />
          <span style={weatherCardStyles.weatherTemp}>{weather.temp}°C</span>
        </div>
      </div>
      <div style={weatherCardStyles.weatherMeta}>
        <span>💧 {weather.humidity}%</span>
        <span>🌬 {weather.wind} km/h</span>
        <span>🌡 Feels {weather.feels}°C</span>
      </div>
      <div style={weatherCardStyles.weatherForecast}>
        {weather.forecast.map((f) => (
          <div key={f.date} style={weatherCardStyles.forecastItem}>
            <div style={weatherCardStyles.forecastDay}>{f.date}</div>
            <img src={f.iconUrl} alt={f.date} width={28} height={28} />
            <div style={weatherCardStyles.forecastTemps}>
              <span style={{ color: "#fbbf24" }}>{f.high}°</span>
              <span style={{ color: "#94a3b8", marginLeft: 4 }}>{f.low}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}