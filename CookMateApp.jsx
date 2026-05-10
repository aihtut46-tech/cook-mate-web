import React, { useState } from 'react';
import {
  Clock,
  Star,
  Heart,
  Search,
  Home,
  ChefHat,
  Bookmark,
  User,
  Menu,
  X
} from 'lucide-react';

const CookMateApp = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const recipes = [
    {
      id: 1,
      name: 'Thai Basil Chicken',
      time: 30,
      rating: 4.8,
      category: 'Asian',
      image: '🍗',
      description: 'Fragrant Thai chicken with basil leaves and chilies',
      difficulty: 'Easy',
      servings: 4,
      ingredients: [
        'Chicken breast',
        'Thai basil',
        'Garlic',
        'Chilies'
      ]
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      time: 25,
      rating: 4.7,
      category: 'Italian',
      image: '🍝',
      description: 'Creamy pasta with bacon and parmesan',
      difficulty: 'Medium',
      servings: 2,
      ingredients: [
        'Spaghetti',
        'Eggs',
        'Parmesan'
      ]
    },
    {
      id: 3,
      name: 'Chicken Curry',
      time: 40,
      rating: 4.9,
      category: 'Myanmar',
      image: '🍛',
      description: 'Authentic Myanmar chicken curry',
      difficulty: 'Medium',
      servings: 4,
      ingredients: [
        'Chicken',
        'Onion',
        'Garlic',
        'Curry powder'
      ]
    }
  ];

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((item) => item !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const HomeScreen = () => (
    <div className="flex-1 overflow-y-auto pb-24">
      {/* Header */}
      <div className="bg-orange-50 px-5 pt-8 pb-5">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Hello Chef 👋
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Find your favorite recipe
            </p>
          </div>

          <button className="p-2 rounded-full hover:bg-orange-100">
            <Menu size={24} />
          </button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>

      {/* Recipes */}
      <div className="p-5 space-y-4">
        {filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => {
              setSelectedRecipe(recipe);
              setCurrentScreen('detail');
            }}
            className="bg-white rounded-2xl shadow-sm p-4 flex gap-4 cursor-pointer hover:shadow-md transition"
          >
            <div className="w-24 h-24 rounded-2xl bg-orange-100 flex items-center justify-center text-5xl">
              {recipe.image}
            </div>

            <div className="flex-1">
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="font-bold text-gray-900 text-lg">
                    {recipe.name}
                  </h2>

                  <p className="text-sm text-gray-500 mt-1">
                    {recipe.category}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(recipe.id);
                  }}
                >
                  <Heart
                    size={20}
                    className={
                      favorites.includes(recipe.id)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-400'
                    }
                  />
                </button>
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  {recipe.time} min
                </div>

                <div className="flex items-center gap-1">
                  <Star
                    size={14}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  {recipe.rating}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const DetailScreen = () => (
    <div className="flex-1 overflow-y-auto pb-24">
      {/* Header */}
      <div className="bg-orange-500 text-white p-5 flex items-center gap-4">
        <button
          onClick={() => setCurrentScreen('home')}
          className="bg-white/20 p-2 rounded-full"
        >
          ←
        </button>

        <h1 className="text-xl font-bold">
          {selectedRecipe.name}
        </h1>
      </div>

      {/* Image */}
      <div className="h-56 bg-orange-100 flex items-center justify-center text-8xl">
        {selectedRecipe.image}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-center gap-5 mb-5">
          <div>
            <p className="text-gray-500 text-sm">Time</p>
            <p className="font-bold">{selectedRecipe.time} min</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Rating</p>
            <p className="font-bold">{selectedRecipe.rating}</p>
          </div>

          <div>
            <p className="text-gray-500 text-sm">Servings</p>
            <p className="font-bold">{selectedRecipe.servings}</p>
          </div>
        </div>

        <p className="text-gray-700 mb-6">
          {selectedRecipe.description}
        </p>

        <h2 className="text-lg font-bold mb-3">
          Ingredients
        </h2>

        <div className="space-y-3">
          {selectedRecipe.ingredients.map((item, index) => (
            <div
              key={index}
              className="bg-orange-50 rounded-xl p-3"
            >
              {item}
            </div>
          ))}
        </div>

        <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition">
          Start Cooking
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-gray-50 flex flex-col max-w-md mx-auto">
      {/* Screens */}
      {currentScreen === 'home' && <HomeScreen />}
      {currentScreen === 'detail' && selectedRecipe && (
        <DetailScreen />
      )}

      {/* Bottom Navigation */}
      <div className="h-20 bg-white border-t border-gray-200 flex items-center justify-around">
        <button
          onClick={() => setCurrentScreen('home')}
          className="flex flex-col items-center text-orange-500"
        >
          <Home size={22} />
          <span className="text-xs mt-1">Home</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <Search size={22} />
          <span className="text-xs mt-1">Search</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <ChefHat size={22} />
          <span className="text-xs mt-1">Chef</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <Bookmark size={22} />
          <span className="text-xs mt-1">Saved</span>
        </button>

        <button className="flex flex-col items-center text-gray-500">
          <User size={22} />
          <span className="text-xs mt-1">Profile</span>
        </button>
      </div>
    </div>
  );
};

export default CookMateApp;
