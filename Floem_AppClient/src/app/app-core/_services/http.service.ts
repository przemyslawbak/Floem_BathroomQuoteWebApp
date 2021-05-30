import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { QuoteItems } from '../_models/quote-items.model';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public postSaveQuote(model: QuoteItems): Observable<any> {
    const url: string = environment.apiUrl + 'api/quote/save';
    let subject = new Subject<any>();
    this.http.post<any>(url, model).subscribe((res) => subject.next(res));

    return subject.asObservable();
  }

  public getTest(id: string): Observable<any> {
    const url: string = environment.apiUrl + 'api/quote/test-get?id=' + id;
    console.log(environment.apiUrl);
    console.log(url);
    return this.http.get(url);
  }

  public postTest(id: string): Observable<any> {
    const url: string = environment.apiUrl + 'api/quote/test-post';
    let subject = new Subject<any>();
    this.http
      .post<any>(url, { id: id })
      .subscribe((res) => subject.next(res));

    return subject.asObservable();
  }
}
