import {Component, OnInit} from '@angular/core';
import {Hero} from '../beans/Hero';
import {HeroService} from './hero.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heros: Hero[];
  
  constructor(private heroService: HeroService, private messageService : MessageService) {
  }

  ngOnInit() {
     this.heroService.getHeroes().subscribe(heros =>this.heros = heros);
  }

}
