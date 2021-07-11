import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/cartelera-response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  public movies: Movie[] = [];
  public texto: string = '';
  
  constructor( public activatedRoute: ActivatedRoute,
    private peliculasService: PeliculasService ) {

     }
    
  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( params => {
      this.texto = params.texto;
    
      this.peliculasService.buscarPeliculas( params.texto ).subscribe( movies => {
      this.movies = movies
    })
    })
  }

}
