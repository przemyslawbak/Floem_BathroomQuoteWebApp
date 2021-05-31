import { Component } from '@angular/core';
import { HttpService } from '@services/http.service';
import { QuoteService } from '@services/quote.service';

@Component({
  templateUrl: './save-and-book.component.html',
  styleUrls: ['./save-and-book.component.css'],
})
export class SaveAndBookComponent {
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
