import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { QuoteItems } from '../_models/quote-items.model';
import { ClientModel } from '@models/quote-client.model';
import { EmailLinkModel } from '@models/email-link.model';
import { AdminModel } from '@models/admin.model';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public postSaveQuote(model: QuoteItems): Observable<any> {
    const url: string = environment.apiUrl + 'api/quote/save-quote';
    let subject = new Subject<any>();
    this.http.post<any>(url, model).subscribe((res) => subject.next(res));

    return subject.asObservable();
  }

  public updateQuote(model: QuoteItems): Observable<any> {
    const url: string = environment.apiUrl + 'api/quote/update-quote/';
    let subject = new Subject<any>();
    this.http.post<any>(url, model).subscribe((res) => subject.next(res));

    return subject.asObservable();
  }

  public updateAdmin(model: AdminModel): Observable<any> {
    const url: string = environment.apiUrl + 'api/admin/set-settings/';
    let subject = new Subject<any>();
    this.http.post<any>(url, model).subscribe((res) => subject.next(res));

    return subject.asObservable();
  }

  public postClient(client: ClientModel): Observable<any> {
    const url: string = environment.apiUrl + 'api/client/save-client';
    let subject = new Subject<any>();
    this.http.post<any>(url, client).subscribe((res) => subject.next(res));

    return subject.asObservable();
  }

  public postEmailLink(model: EmailLinkModel): Observable<any> {
    const url: string = environment.apiUrl + 'api/client/email-link';
    let subject = new Subject<any>();
    this.http.post<any>(url, model).subscribe((res) => subject.next(res));

    return subject.asObservable();
  }

  public getQuote(id: string): Observable<any> {
    const url: string = environment.apiUrl + 'api/quote/get-quote?id=' + id;
    return this.http.get(url);
  }

  public getAdminModel(): Observable<any> {
    const url: string = environment.apiUrl + 'api/admin/get-settings';
    console.log('hit get');
    return this.http.get(url);
  }
}
