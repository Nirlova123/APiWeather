"use client";

import { getWeather } from "@/lib/weather";
import WeatherCard from "@/components/WeatherCard";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";

export default function Home() {
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (city: string) => {
    try {
      setLoading(true);
      setError("");
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError("City not found. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-sky-200 to-blue-300 flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Weather App</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weather && !loading && <WeatherCard weather={weather} />}
    </main>
  );
}