import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Evento } from '../Evento';
import { EventoService } from '../Evento-Service';

@Component({
  selector: 'app-eventos-lista',
  templateUrl: './eventos-lista.component.html',
  styleUrls: ['./eventos-lista.component.css']
})
export class EventosListaComponent implements OnInit {

  eventos:Evento[] = [];
  EventoSelecionado : Evento;
  mensagemSucesso: string;
  mensagemErro: string;
  
  constructor(private service: EventoService ) {}

  ngOnInit(): void {

    this.service.listar().subscribe( response => this.eventos = response);
  }

  SelecionaEventoParaDelecao(Evento : Evento)
  {
    this.EventoSelecionado = Evento;
  }

  deletarEvento()
  {
    this.service.remover(this.EventoSelecionado)
    .subscribe(response => { 
      this.mensagemSucesso = 'Evento removido com sucesso!'
      this.ngOnInit();
    },
    
    erro => this.mensagemErro = 'Ocorreu um erro ao tentar remover o evento'
    )
  }

}
