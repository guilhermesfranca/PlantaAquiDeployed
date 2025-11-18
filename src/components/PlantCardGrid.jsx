export default function PlantCardGrid({
  recentPlants = [],
  viewMode,
  toggleLike,
}) {
  if (!Array.isArray(recentPlants)) return null;

  return (
    <div
      className={
        viewMode === "grid"
          ? "grid grid-cols-2 gap-4 mb-6"
          : "flex flex-col gap-4 mb-6"
      }
    >
      {recentPlants.map((plant) => (
        <div
          key={plant.id}
          className={`relative bg-white rounded-2xl shadow-md overflow-hidden ${
            viewMode === "list" ? "flex items-center gap-4 p-3" : ""
          }`}
        >
          <div
            className={
              viewMode === "list"
                ? "w-20 h-20 shrink-0 relative rounded-xl overflow-hidden"
                : "relative h-48"
            }
          >
            <img
              src={plant.image}
              alt={plant.tree}
              className="w-full h-full object-cover"
            />
            <button
              onClick={() => toggleLike(plant.id)}
              className="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill={plant.liked ? "#ef4444" : "none"}
                stroke={plant.liked ? "#ef4444" : "#4b5563"}
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </button>
          </div>
          <div className={viewMode === "grid" ? "p-3" : ""}>
            <p className="font-semibold text-gray-900 text-sm">{plant.name}</p>
            <p className="text-xs text-gray-600">Planted {plant.tree}</p>
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
              {plant.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
