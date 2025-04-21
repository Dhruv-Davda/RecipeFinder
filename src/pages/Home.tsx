import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { searchRecipes } from '../services/api';
import { Recipe } from '../types/recipe';
import RecipeCard from '../components/RecipeCard';

const Home = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      if (!query.trim()) {
        setRecipes([]);
        return;
      }

      setLoading(true);
      setError('');

      try {
        const data = await searchRecipes(query);
        setRecipes(data.results);
      } catch (err) {
        setError('Failed to fetch recipes. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchRecipes();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Find Your Perfect Recipe
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Search from thousands of delicious recipes
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search recipes (e.g., 'pasta', 'chicken')"
              className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-500 text-white p-2 rounded-full">
              <Search className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto"></div>
        </div>
      )}

      {error && (
        <div className="text-center text-red-500 mb-8">{error}</div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      {!loading && !error && recipes.length === 0 && query && (
        <div className="text-center text-gray-600">
          No recipes found. Try a different search term.
        </div>
      )}
    </div>
  );
};

export default Home;