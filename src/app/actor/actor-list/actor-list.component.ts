import { Component, Input, OnInit } from '@angular/core';
import { Actor } from '../Actor';

@Component({
  selector: 'app-actor-list',
  standalone: false,
  templateUrl: './actor-list.component.html',
  styleUrl: './actor-list.component.css',
})
export class ActorListComponent implements OnInit {
  @Input() actors: Actor[] = [];
 
  averagePopularity: number = 0;

  ngOnInit() {
    this.calculateAveragePopularity();
  }

  calculateAveragePopularity() {
    if (this.actors.length === 0) {
      this.averagePopularity = 0;
      return;
    }

    let total = this.actors.reduce((sum, actor) => sum + actor.popularity, 0);
    this.averagePopularity = Number((total / this.actors.length).toFixed(2));
  }
}