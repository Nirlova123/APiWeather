// lib/weather.ts

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_WEATHER_API_URL;

export async function getWeather(city: string) {
  if (!city) return null;

  const res = await fetch(
    `${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`,
    { cache: "no-store" } // always fresh data
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather data");
  }

  return res.json();
}
