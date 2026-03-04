
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export interface WeatherData {
    city: string;
    country: string;
    temp: number;
    feels: number;
    humidity: number;
    wind: number;
    condition: string;
    iconUrl: string;
    forecast: ForecastDay[];
}

export interface ForecastDay {
    date: string;
    high: number;
    low: number;
    iconUrl: string;
}

const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function mapResponse(data: any): WeatherData {
    return {
        city: data.location.name,
        country: data.location.country,
        temp: Math.round(data.current.temp_c),
        feels: Math.round(data.current.feelslike_c),
        humidity: data.current.humidity,
        wind: Math.round(data.current.wind_kph),
        condition: data.current.condition.text,
        iconUrl: "https:" + data.current.condition.icon,
        forecast: data.forecast.forecastday.map((d: any) => ({
            date: DAY_SHORT[new Date(d.date).getDay()],
            high: Math.round(d.day.maxtemp_c),
            low: Math.round(d.day.mintemp_c),
            iconUrl: "https:" + d.day.condition.icon,
        })),
    };
}

export const weatherService = {
    async getForecast(city = "Saigon", days = 4): Promise<WeatherData> {
        const res = await fetch(
            `${BASE_URL}/forecast.json?q=${encodeURIComponent(city)}&days=${days}&key=${API_KEY}`
        );
        if (!res.ok) throw new Error(`Weather fetch failed (${res.status})`);
        return mapResponse(await res.json());
    },
};