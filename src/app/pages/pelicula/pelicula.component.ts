import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const {id} = this.activatedRoute.snapshot.params;
  }

}
