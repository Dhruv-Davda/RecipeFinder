import axios from 'axios';
import { Recipe, MealDBResponse, MealDBMeal } from '../types/recipe';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const api = axios.create({
  baseURL: BASE_URL
});

const convertMealDBToRecipe = (meal: MealDBMeal): Recipe => {
  const ingredients: any[] = [];
  
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        id: i,
        original: `${measure} ${ingredient}`.trim(),
        amount: 1,
        unit: measure || '',
        name: ingredient
      });
    }
  }

  return {
    id: parseInt(meal.idMeal),
    title: meal.strMeal,
    image: meal.strMealThumb,
    servings: 4,
    readyInMinutes: 30, 
    sourceUrl: meal.strSource || '',
    summary: meal.strInstructions.split('.')[0] + '.', 
    instructions: meal.strInstructions,
    extendedIngredients: ingredients
  };
};

export const searchRecipes = async (query: string): Promise<{ results: Recipe[] }> => {
  const { data } = await api.get<MealDBResponse>('/search.php', {
    params: { s: query }
  });
  
  const recipes = data.meals ? data.meals.map(convertMealDBToRecipe) : [];
  
  return {
    results: recipes,
    offset: 0,
    number: recipes.length,
    totalResults: recipes.length
  };
};

export const getRecipeById = async (id: number): Promise<Recipe> => {
  const { data } = await api.get<MealDBResponse>(`/lookup.php?i=${id}`);
  
  if (!data.meals || !data.meals[0]) {
    throw new Error('Recipe not found');
  }
  
  return convertMealDBToRecipe(data.meals[0]);
};