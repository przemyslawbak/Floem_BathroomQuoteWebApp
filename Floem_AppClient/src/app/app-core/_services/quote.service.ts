import { QuoteItems } from './../_models/quote-items.model';
import { Injectable } from '@angular/core';

@Injectable()
export class QuoteService {
  public quoteState: QuoteItems = new QuoteItems();
  public quoteId: string = '';

  constructor() {}

  public verifyQuoteChanges(quoteState: QuoteItems): boolean {
    if (
      quoteState.ceilingTotal == 0 &&
      quoteState.doorsTotal == 0 &&
      quoteState.floorTotal == 0 &&
      quoteState.itemsTotal == 0 &&
      quoteState.wallsTotal == 0 &&
      quoteState.removalsTotal == 0 &&
      quoteState.electricalTotal == 0
    ) {
      return false;
    }

    return true;
  }
}
