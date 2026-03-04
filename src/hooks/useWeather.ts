import { useState, useEffect } from "react";
import { weatherService, type WeatherData } from "../services/weather.service";

type Status = "loading" | "success" | "error";

export function useWeather() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [status, setStatus] = useState<Status>("loading");
    const [error, setError] = useState("");

    useEffect(() => {
        weatherService.getForecast()
            .then((data) => { setWeather(data); setStatus("success"); })
            .catch((err) => { setError(err.message); setStatus("error"); });
    }, []);

    return { weather, status, error };
}