import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DisplayPokemon, Pokemon } from '../models/pokemon.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient:HttpClient) { }
  retrievePokemonObservable(id:number){
    return this.httpClient.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .pipe(map((pokemon) => this.pokemonTransformer(pokemon)));
  }

  pokemonTransformer = (pokemon: Pokemon): DisplayPokemon =>
  ({
    id: pokemon.id,
    name: pokemon.name,
    height: pokemon.height,
    weight: pokemon.weight,
    back_shiny: pokemon.sprites.back_shiny,
    front_shiny: pokemon.sprites.front_shiny,
  });
}
