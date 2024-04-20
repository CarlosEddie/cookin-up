import type ICategory from '@/interfaces/ICategory';

export async function getCategories() {
  const response = await fetch('https://gist.githubusercontent.com/CarlosEddie/ef0d4475b38a3b692501f989f6dc17f6/raw/83029b4276e48786d640d211b275700154222855/categories.json');

  const categories: ICategory[] = await response.json();

  return categories;
}