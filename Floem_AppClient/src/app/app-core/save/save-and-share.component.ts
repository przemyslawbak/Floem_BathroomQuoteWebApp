import { QuoteService } from './../_services/quote.service';
import { Component } from '@angular/core';
import { HttpService } from '@services/http.service';

@Component({
  templateUrl: './save-and-share.component.html',
  styleUrls: ['./save-and-share.component.css'],
})
export class SaveAndShareComponent {
  constructor(private http: HttpService, private quotes: QuoteService) {}

  public bookQuoteOnline(): void {
    this.http.getTest('666').subscribe(async (text: string) => {
      alert('response:' + text);
    });
  }

  public getQuoteLink(): void {
    this.http.postSaveQuote(this.quotes.quoteState).subscribe(() => {
      //todo
    });
  }
}
