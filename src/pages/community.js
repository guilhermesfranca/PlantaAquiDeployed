"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import PlantCardGrid from "../components/PlantCardGrid.jsx";
import AddTreeForm from "../components/AddTreeForm.jsx";
import Navbar from "../components/Navbar.jsx";
import { Heart, DollarSign } from "lucide-react";

export default function Community() {
  const [activeTab, setActiveTab] = useState("activity");
  const [viewMode, setViewMode] = useState("grid");
  const [plants, setPlants] = useState([]);
  const [myPlants, setMyPlants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("plant") === "true") {
      setShowForm(true);
    }
  }, [searchParams]);

  // 🔹 Fetch TODOS os eventos do database
  const fetchEvents = async () => {
    try {
      const res = await fetch("/api/events");
      const data = await res.json();

      if (Array.isArray(data)) {
        // 🔹 Todos os eventos para Activity tab
        setPlants(data);

        // 🔹 Apenas eventos do Enzo Valentino para My Plants tab
        const myTrees = data.filter(
          (event) => event.organizerName?.toLowerCase() === "enzo valentino"
        );
        setMyPlants(myTrees);
      }
    } catch (error) {
      console.error("❌ Error fetching events:", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Mock data for Activity tab
  const [events, setEvents] = useState([
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_photo-1681064887741-3da2fd0c5896?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
      name: "Stacy",
      event: "Cleaning the forest",
      time: "6 mins ago",
      liked: true,
    },
    {
      id: 2,
      image:
        "https://circularecology.com/wp-content/uploads/2024/12/20210621_kenya-Lamu_0660-copy-scaled.jpg.webp",
      name: "James",
      event: "Planting 100 trees",
      time: "3h ago",
      liked: false,
    },
    {
      id: 3,
      image:
        "https://www.fruitrescue.org/uploads/1/4/2/1/142131450/4march2023-treecareworkshop-hill-10_orig.jpg",
      name: "Morgan",
      event: "Tree care workshop",
      time: "3h ago",
      liked: true,
    },
  ]);

  const handleAddTree = async (formData) => {
    setLoading(true);
    try {
      const randomImages = [
        "https://images.unsplash.com/photo-1578011166201-83d553ed495f?auto=format&fit=crop&q=80&w=627",
        "https://images.unsplash.com/photo-1566114912475-c04353a8eab1?auto=format&fit=crop&q=80&w=687",
        "https://images.unsplash.com/photo-1603352910231-534f880418e3?auto=format&fit=crop&q=80&w=687",
        "https://plus.unsplash.com/premium_photo-1680018259460-e679784869c3?auto=format&fit=crop&q=80&w=687",
      ];
      const imageUrl =
        randomImages[Math.floor(Math.random() * randomImages.length)];

      const res = await fetch("/api/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `Plantação de ${formData.species} 🌱`,
          description: `Nova árvore adicionada em ${formData.location}`,
          location: formData.location,
          date: new Date(),
          imageUrl,
          icon: "🌿",
          liked: false,
          organizerName: "Enzo Valentino",
        }),
      });

      const data = await res.json();
      if (res.ok) {
        await fetchEvents();
        setShowForm(false);
      } else {
        alert(data.message || "Erro ao adicionar árvore.");
      }
    } catch (error) {
      console.error("❌ Error adding tree:", error);
      alert("Erro ao adicionar árvore.");
    } finally {
      setLoading(false);
    }
  };

  const toggleLike = async (id) => {
    setPlants((prev) =>
      prev.map((p) => (p._id === id ? { ...p, liked: !p.liked } : p))
    );
    setMyPlants((prev) =>
      prev.map((p) => (p._id === id ? { ...p, liked: !p.liked } : p))
    );
  };

  const getFavoritePlants = () => {
    const allPlants = [...plants, ...myPlants];
    const uniquePlants = allPlants.filter(
      (plant, index, self) =>
        index === self.findIndex((p) => p._id === plant._id)
    );
    return uniquePlants.filter((plant) => plant.liked);
  };

  const favoritePlants = getFavoritePlants();

  const todayActivity = plants.slice(0, 5).map((event) => ({
    id: event._id,
    icon: event.icon || "🌱",
    name: event.organizerName || "Enzo Valentino",
    action: `planted ${event.title}`,
    time: new Date(event.date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  }));

  return (
    <div className="max-w-md mx-auto bg-gradient-to-b from-emerald-50 to-white min-h-screen pb-24 relative">
      {/* ===== HEADER ===== */}
      <div className="relative px-6 pt-6 pb-4 rounded-b-3xl shadow-sm bg-white">
        <div className="flex items-center justify-between mb-4">
          <div className="mb-4">
            <p className="text-sm text-gray-600">Bem vindo <span className="text-green-600 font-bold">Enzo,</span></p>
            <h1 className="text-3xl font-bold text-gray-900">
              Ajude-nos a salvar a terra
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/donate"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full hover:from-green-600 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg"
            >
              <DollarSign className="w-4 h-4" />
              <span className="text-sm font-semibold">Doar</span>
            </a>
            
            <a
              href="/profile"
              className="flex items-center justify-center w-12 h-12 rounded-full overflow-hidden hover:ring-2 hover:ring-green-500 transition-all"
            >
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </a>
          </div>
        </div>

        <div className="flex gap-3 justify-center">
          {["Activity", "Favorites", "My plants"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.toLowerCase()
                  ? "bg-green-500 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ===== PLANTS SECTION ===== */}
      <div className="px-6 mt-6">
        {/* Activity Tab */}
        {activeTab === "activity" && (
  <>
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
        Latest Events
      </h2>
      <div className="flex gap-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === "grid"
              ? "bg-green-100 text-green-600"
              : "text-gray-400 hover:bg-gray-100"
          }`}
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <rect x="0" y="0" width="6" height="6" rx="1" />
            <rect x="10" y="0" width="6" height="6" rx="1" />
            <rect x="0" y="10" width="6" height="6" rx="1" />
            <rect x="10" y="10" width="6" height="6" rx="1" />
          </svg>
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === "list"
              ? "bg-green-100 text-green-600"
              : "text-gray-400 hover:bg-gray-100"
          }`}
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <rect x="0" y="2" width="16" height="2" rx="1" />
            <rect x="0" y="7" width="16" height="2" rx="1" />
            <rect x="0" y="12" width="16" height="2" rx="1" />
          </svg>
        </button>
      </div>
    </div>

    <div className="h-96 overflow-y-auto hide-scrollbar">
      {events.length > 0 ? (
        <PlantCardGrid
          recentPlants={events.map((p) => ({
            id: p.id,
            image: p.image,
            name: p.name,
            tree: p.event,
            time: p.time,
            liked: p.liked,
          }))}
          viewMode={viewMode}
          toggleLike={toggleLike}
        />
      ) : (
        <p className="text-gray-500 text-sm text-center mt-8">
          No events yet. 🌿 Be the first to plant a tree!
        </p>
      )}
    </div>
  </>
)}

        {/* ===== FAVORITES TAB ===== */}
        {activeTab === "favorites" && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Favorites
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-green-100 text-green-600"
                      : "text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <rect x="0" y="0" width="6" height="6" rx="1" />
                    <rect x="10" y="0" width="6" height="6" rx="1" />
                    <rect x="0" y="10" width="6" height="6" rx="1" />
                    <rect x="10" y="10" width="6" height="6" rx="1" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-green-100 text-green-600"
                      : "text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <rect x="0" y="2" width="16" height="2" rx="1" />
                    <rect x="0" y="7" width="16" height="2" rx="1" />
                    <rect x="0" y="12" width="16" height="2" rx="1" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="h-[calc(100vh-280px)] overflow-y-auto hide-scrollbar">
              {favoritePlants.length > 0 ? (
                <PlantCardGrid
                  recentPlants={favoritePlants.map((p) => ({
                    id: p._id,
                    image: p.imageUrl,
                    name: p.organizerName || "Enzo Valentino",
                    tree: p.title,
                    time: new Date(p.date).toLocaleDateString(),
                    liked: p.liked,
                  }))}
                  viewMode={viewMode}
                  toggleLike={toggleLike}
                />
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Heart size={48} className="text-gray-300 mb-3" />
                  <h3 className="text-gray-600 font-semibold mb-1">
                    No favorites yet
                  </h3>
                  <p className="text-sm text-gray-500">
                    Start liking plants to see them here
                  </p>
                </div>
              )}
            </div>
          </>
        )}

        {/* ===== MY PLANTS SECTION ===== */}
        {activeTab === "my plants" && (
          <>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                My Plants
              </h2>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid"
                      ? "bg-green-100 text-green-600"
                      : "text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <rect x="0" y="0" width="6" height="6" rx="1" />
                    <rect x="10" y="0" width="6" height="6" rx="1" />
                    <rect x="0" y="10" width="6" height="6" rx="1" />
                    <rect x="10" y="10" width="6" height="6" rx="1" />
                  </svg>
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list"
                      ? "bg-green-100 text-green-600"
                      : "text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <rect x="0" y="2" width="16" height="2" rx="1" />
                    <rect x="0" y="7" width="16" height="2" rx="1" />
                    <rect x="0" y="12" width="16" height="2" rx="1" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="h-[calc(100vh-280px)] overflow-y-auto hide-scrollbar">
              {myPlants.length > 0 ? (
                <PlantCardGrid
                  recentPlants={myPlants.map((p) => ({
                    id: p._id,
                    image: p.imageUrl,
                    name: "Enzo Valentino",
                    tree: p.title,
                    time: new Date(p.date).toLocaleDateString(),
                    liked: p.liked,
                  }))}
                  viewMode={viewMode}
                  toggleLike={toggleLike}
                />
              ) : (
                <p className="text-gray-500 text-sm text-center mt-8">
                  Ainda não plantaste nenhuma árvore. 🌳
                </p>
              )}
            </div>
          </>
        )}

        {/* ===== TODAY SECTION ===== */}
        {activeTab === "activity" && (
          <div className="mb-6 mt-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                Hoje
              </h2>
            </div>

            <div className="space-y-3">
              {todayActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-white rounded-2xl p-4 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-xl">
                      {activity.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-900">
                        <span className="font-semibold">{activity.name}</span>{" "}
                        {activity.action}
                      </p>
                      <p className="text-xs text-green-600 flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                        {activity.time}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ===== ADD TREE MODAL ===== */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative bg-white rounded-3xl p-6 w-[90%] max-w-lg shadow-2xl">
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ✕
            </button>
            <AddTreeForm onAdd={handleAddTree} />
          </div>
        </div>
      )}

      {/* ===== NAVBAR ===== */}
      <Navbar onPlantClick={() => setShowForm(true)} />
    </div>
  );
}