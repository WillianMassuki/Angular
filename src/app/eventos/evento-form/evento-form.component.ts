import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { Evento } from '../Evento';
import { EventoService } from '../Evento-Service';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.css']
})
export class EventoFormComponent implements OnInit {

  evento: Evento;
  sucess : boolean = false;
  errors: String[];
  codigo: number;
  router : Router;
  activatedRoute: ActivatedRoute;
  service : EventoService;

  constructor() 
  {
    this.evento = new Evento();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params
    params.subscribe(urlParams => {
      this.codigo = urlParams['codigo'];
      if(this.codigo)
      {
        this.service.listarPorCodigo(this.codigo)
        .subscribe( response => this.evento = response,
          errorResponse => this.evento = new Evento())
      }

    })
  }


  voltarParaListagem()
  {
    this.router.navigate(['/eventos/lista']);
  }

  onSubmit()
  {
    if(this.codigo)
    {
      this.service.atualizar(this.evento)
      .subscribe(response => {
        this.sucess = true;
        this.errors = null;
    }, errorResponse => {
      this.errors = ['Erro ao atualizar o cliente.']
    }) 
  } else
  {
    this.service
    .salvar(this.evento)
      .subscribe( response => {
        this.sucess = true;
        this.errors = null;
        this.evento = response;
      } , errorResponse => {
        this.sucess = false;
        this.errors = errorResponse.error.errors;
      })
  }
  }

}
