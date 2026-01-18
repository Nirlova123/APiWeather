// components/WeatherCard.tsx

interface WeatherCardProps {
  weather: any;
}

export default function WeatherCard({ weather }: WeatherCardProps) {
  const { location, current } = weather;

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        {location.name}, {location.country}
      </h2>

      <img
        src={current.condition.icon}
        alt={current.condition.text}
        className="mx-auto mb-4"
      />

      <p className="text-gray-500 text-lg mb-2">{current.condition.text}</p>

      <p className="text-5xl font-bold text-gray-800 mb-4">
        {current.temp_c}°C
      </p>

      <div className="flex justify-between text-gray-500 text-sm mt-6">
        <span>Feels Like: {current.feelslike_c}°C</span>
        <span>Humidity: {current.humidity}%</span>
      </div>

      <p className="text-gray-500 text-sm mt-2">
              Wind: {current.wind_kph} km/h
      </p>
    </div>
  );
}