export interface ICategories{
  nome: string;
  ingredientes: string;
  imagem: string;
}

export default interface IRecipes {
  nome: string;
  ingredientes: string[];
  imagem: string;
}


export async function getCategories(){
  return getData<ICategories[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/categorias.json');
}


async function getData<T>(url: string) {
  const resposta = await fetch(url);
  return resposta.json() as T;
}

export async function getRecipes() {
  return getData<IRecipes[]>('https://gist.githubusercontent.com/antonio-evaldo/002ad55e1cf01ef3fc6ee4feb9152964/raw/bf463b47860043da3b3604ca60cffc3ad1ba9865/receitas.json');
}