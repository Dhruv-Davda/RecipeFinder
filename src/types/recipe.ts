export interface Recipe {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  sourceUrl: string;
  summary: string;
  instructions: string;
  extendedIngredients: Ingredient[];
}

export interface Ingredient {
  id: number;
  original: string;
  amount: number;
  unit: string;
  name: string;
}

export interface SearchResponse {
  results: Recipe[];
  offset: number;
  number: number;
  totalResults: number;
}

// MealDB specific types
export interface MealDBResponse {
  meals: MealDBMeal[] | null;
}

export interface MealDBMeal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strSource: string;
  [key: string]: string | null; // For dynamic ingredient/measure properties
}