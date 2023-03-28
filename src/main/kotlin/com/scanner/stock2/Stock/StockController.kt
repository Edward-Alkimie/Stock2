package com.scanner.stock2.Stock

import com.scanner.stock2.Symbol.Symbol
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/api/v1/stock")
class StockController {

    // why use lateinit with var?
    @Autowired
    private lateinit var stockService: StockService

    // what is a ResponseEntity
    @GetMapping
    fun allStocks(): ResponseEntity<List<Stock>> {
        return ResponseEntity.ok(/* body = */ stockService.getAllStocks())
    }

    @GetMapping("/{symbol}")
    fun singleStock(@PathVariable symbol: String): ResponseEntity<Stock> {
        val stockInfo = stockService.getSingleStock(symbol)
        return if (stockInfo != null){
            ResponseEntity<Stock>(stockInfo, HttpStatus.OK)
        } else {
            ResponseEntity.notFound().build()
        }

    }
    @PostMapping("/morestock")
    fun addStock(@RequestBody stockInfo: Stock): ResponseEntity<Stock>{
        println(stockInfo)
        val savedStock = stockService.saveStock(stockInfo)
        return ResponseEntity.ok(savedStock)
    }

    @GetMapping("/hello/world")
    fun helloWorld():ResponseEntity<String>{
        return ResponseEntity<String>("hello", HttpStatus.OK)
    }

    @DeleteMapping()
    fun deleteStock(@RequestBody symbol: Symbol): ResponseEntity<Stock> {

        val result = stockService.deleteBySymbol(symbol)
        return ResponseEntity<Stock>(result , HttpStatus.OK)
    }
    @PutMapping("/editstock")
    fun editStock(@RequestBody stock: Stock): ResponseEntity<Stock>{
        val updatedStock = stockService.updateUser(stock)
        return ResponseEntity.ok(updatedStock)
    }

}