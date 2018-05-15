import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-fournd-error';
import { AppError } from './../common/app-error';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable,throwError, } from 'rxjs';
import { map, filter, scan, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url: string, private http: Http) {

  }

  getAll() {
    return this.http.get(this.url)
      // .map(Response => Response.json()) if you want to map the response
      //.catchError(this.handleError)
  }

  delete(id) {
    return this.http.delete(this.url + '/delete/' + id)
      //.catchError(this.handleError)
  }

  add(request) {
    return this.http.post(this.url + "/add", JSON.stringify(request))
      //.catchError(this.handleError)
  }

  private handleError(error: Response) {
    if (error.status === 404)
      return Observable.throw(new NotFoundError(error.json()));

    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    return Observable.throw(new AppError(error.json()));
  }
}
