export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    //sprites object
    sprites: {
      back_shiny: string;
      front_shiny: string;
    }
}

//Omit sprites and include 2 new properties at the root level
export type DisplayPokemon = Omit<Pokemon, 'sprites'> & {
  back_shiny: string;
  front_shiny: string;
};
