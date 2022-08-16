import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../model/course';
import { delay, first, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  // caminho do endpoint
  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  // get all
  list()  {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      //take(1): assim que o servidor me der uma resposta, eu vou pegar essa resposta e finalizar a inscrição com a origem dos dados
      // first: só pega a primeira resposta que o servidor enviar
      delay(1000),
      first(),
      tap(courses => console.log(courses))
    );
  }
}
