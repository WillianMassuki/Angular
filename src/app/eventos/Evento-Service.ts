
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Evento } from './Evento';

@Injectable
({
    providedIn : 'root'
})
export class EventoService {

    apiUrl: string = environment.apiURLBase + '/api/eventos';

    constructor(private http: HttpClient) {}

    salvar(evento: Evento): Observable<Evento>
    {
        return this.http.post<Evento>(`${this.apiUrl}`, evento);

    }

    atualizar(evento: Evento) : Observable<any>
    {
        return this.http.put<Evento>(`${this.apiUrl}/${evento.codigo}`, evento); 
    }

    listar(): Observable<Evento[]>
    {
        return this.http.get<Evento[]>(this.apiUrl);
    }

    listarPorCodigo(codigo: number) : Observable<Evento>
    {
        return this.http.get<any>(`${this.apiUrl}/${codigo}`);

    }

    remover(evento: Evento) : Observable<any>
    {
        return this.http.delete<any>(`${this.apiUrl}/ ${evento.codigo}`);
    }


}