import {Component, OnInit, Input} from '@angular/core';
import {Hero} from '../../beans/Hero';
import {HeroService} from '../hero.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor(private heroServie: HeroService, private route: ActivatedRoute, private location: Location) {}

  hero: Hero;

  ngOnInit() {
    const id = + this.route.snapshot.paramMap.get('id');
    this.heroServie.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}
