package com.scanner.stock2.Finnhub

import io.finnhub.api.apis.DefaultApi
import io.finnhub.api.models.BasicFinancials
import io.finnhub.api.models.FinancialsAsReported
import io.finnhub.api.models.SymbolLookup
import org.springframework.stereotype.Service

//import io.finnhub.api.apis.DefaultApi


@Service
class FinnhubService (
    private var apiClient: DefaultApi

){
    fun symbolSearch(symbolString:String): SymbolLookup {
        return apiClient.symbolSearch(symbolString)
    }

    fun basicFinancials(symbolString: String,meticString:String): BasicFinancials {
        return apiClient.companyBasicFinancials(symbolString,meticString)

    }
    fun financialsReported(symbol:String, cik: String?, accessNumber: String?, frequency: String?, from:String?, to:String?): FinancialsAsReported{
        return apiClient.financialsReported(symbol,cik,accessNumber,frequency,frequency, to)
    }


}

