import { NgFor, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
//import { retrievePokemonFn } from './retrieve-pokemon';
import { DisplayPokemon } from '../../models/pokemon.model';
import { PokemonService } from 'src/app/services/pokemon.service';


const initialValue: DisplayPokemon = {
  id: -1,
  name: '',
  height: -1,
  weight: -1,
  front_shiny: '',
  back_shiny: '',
}
@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [FormsModule, NgTemplateOutlet, NgFor],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PokemonComponent {
  readonly min = 1;
  readonly max = 100;
  //pokemonSvc=inject(PokemonService);
  searchIdSub = new BehaviorSubject(1);
  currentPokemonIdSub = new BehaviorSubject(1);
  pokemon = toSignal(this.currentPokemonIdSub.pipe(switchMap((id) => this.pokemonSvc.retrievePokemonObservable(id))), { initialValue });

  rowData = computed(() => {
    const { id, name, height, weight } = this.pokemon();
    return [
      { text: 'Id: ', value: id },
      { text: 'Name: ', value: name },
      { text: 'Height: ', value: height },
      { text: 'Weight: ', value: weight },
    ];
  });

  updatePokemonId(delta: number) {
    const newId = this.currentPokemonIdSub.getValue() + delta;
    this.currentPokemonIdSub.next(Math.min(Math.max(this.min, newId), this.max));
  }

  constructor(private pokemonSvc:PokemonService) {
    this.searchIdSub
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        filter((value) => value >= this.min && value <= this.max),
        takeUntilDestroyed(),
      ).subscribe((value) => this.currentPokemonIdSub.next(value));
  }
}
