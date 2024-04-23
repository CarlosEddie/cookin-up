import type ICategory from '@/interfaces/ICategory';
import type IRecipe from '@/interfaces/IRecipe';

async function getDataFromURL<T>(url: string) {
  const response = await fetch(url);
  return response.json() as T;
}

export async function getCategories() {
  return getDataFromURL<ICategory[]>('https://gist.githubusercontent.com/CarlosEddie/ef0d4475b38a3b692501f989f6dc17f6/raw/83029b4276e48786d640d211b275700154222855/categories.json');
}

export async function getRecipes() {
  return getDataFromURL<IRecipe[]>('https://gist.githubusercontent.com/CarlosEddie/dc349b6ec8670afb7002c7b986a17b8c/raw/72497febc90923454a89cf5640420bb603be82db/recipes.json');
}