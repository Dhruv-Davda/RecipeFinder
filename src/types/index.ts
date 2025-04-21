// Type definitions for the Recipe Maker application

export interface Ingredient {
  id: string;
  name: string;
  amount: string;
  unit: string;
}

export interface Instruction {
  id: string;
  step: number;
  text: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  ingredients: Ingredient[];
  instructions: Instruction[];
  category: string;
  tags: string[];
  isFavorite: boolean;
  createdAt: string;
}

export type RecipeFormData = Omit<Recipe, 'id' | 'createdAt' | 'isFavorite'>;

export interface RecipesContextType {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  fetchRecipes: () => Promise<void>;
  getRecipeById: (id: string) => Recipe | undefined;
  addRecipe: (recipe: RecipeFormData) => Promise<Recipe>;
  updateRecipe: (id: string, recipe: RecipeFormData) => Promise<Recipe>;
  deleteRecipe: (id: string) => Promise<void>;
  toggleFavorite: (id: string) => Promise<void>;
  searchRecipes: (query: string) => Recipe[];
  filterRecipesByCategory: (category: string) => Recipe[];
  filterRecipesByTags: (tags: string[]) => Recipe[];
}