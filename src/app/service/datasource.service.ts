import { environment } from './../../environments/environment';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-fournd-error';
import { AppError } from './../common/app-error';
import { Injectable } from '@angular/core';
import { Observable, } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

export class DataService {

  headers;
  url;

  constructor(url: string, private http: HttpClient) {
    this.headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    this.url = environment.apiEndpoint + url;
  }

  getAll() {
    return this.http.get(this.url);
    // .map(Response => Response.json()) if you want to map the response
    // .catchError(this.handleError)
  }

  getAllForTeam(team) {
    return this.http.get(this.url + '?team=' + team);
    // .map(Response => Response.json()) if you want to map the response
    // .catchError(this.handleError)
  }

  delete(id) {
    return this.http.delete(this.url + '/delete/' + id);
    // .catchError(this.handleError)
  }

  add(request) {
    return this.http.post(this.url + '/add', request, this.headers);
    // .catchError(this.handleError)
  }

  update(request) {
    return this.http.put(this.url + '/update', request, this.headers);
    // .catchError(this.handleError)
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return Observable.throw(new NotFoundError(error.json()));
    }

    if (error.status === 400) {
      return Observable.throw(new BadInput(error.json()));
    }

    return Observable.throw(new AppError(error.json()));
  }
}
