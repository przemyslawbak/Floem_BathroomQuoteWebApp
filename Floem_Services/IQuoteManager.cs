﻿using Floem_Models;

namespace Floem_Services
{
    public interface IQuoteManager
    {
        string AddQuote(FloemQuoteModel model);
    }
}