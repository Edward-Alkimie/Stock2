package com.scanner.stock2.Finnhub

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
@RequestMapping("/stockf")
class FinnhubController {
    @Autowired
    private lateinit var finnhubService: FinnhubService

    @GetMapping("/hello/world")
    fun helloWorld():ResponseEntity<String>{
        return ResponseEntity<String>("hello", HttpStatus.OK)
    }

    @GetMapping("/{ticker}")
    fun searchStock(@PathVariable ticker: String): ResponseEntity<io.finnhub.api.models.SymbolLookup> {
        val stockInfo = finnhubService.symbolSearch(ticker)
        return ResponseEntity<io.finnhub.api.models.SymbolLookup>(stockInfo, HttpStatus.OK)
    }

    @GetMapping("/basic")
    fun basicFinancials(@RequestParam symbol:String, @RequestParam metric:String): ResponseEntity<io.finnhub.api.models.BasicFinancials>{
        val basicFin = finnhubService.basicFinancials(symbol,metric)
        return ResponseEntity<io.finnhub.api.models.BasicFinancials>(basicFin, HttpStatus.OK)
    }

    @GetMapping("/Reported/")
    fun financialsReported(): ResponseEntity<io.finnhub.api.models.FinancialsAsReported>{
        val finReported = finnhubService.financialsReported("AAPL",null,null,"annual",null,null )
        return ResponseEntity<io.finnhub.api.models.FinancialsAsReported>(finReported,HttpStatus.OK)
    }
}