package com.scanner.stock2.Stock


import com.scanner.stock2.Symbol.Symbol
import org.springframework.stereotype.Service

@Service
class StockService (
    val stockRepository: StockRepository
){
    fun getAllStocks(): List<Stock>{
        return stockRepository.findAll()
    }

    fun getSingleStock(symbol: String): Stock? {
        return stockRepository.findBySymbol(symbol)
    }

    fun saveStock(stockInfo: Stock): Stock? {
        return if (getSingleStock(stockInfo.symbol) == null){
            stockRepository.save(stockInfo)
            stockInfo
        } else{
            null
        }
    }
    fun deleteBySymbol(symbol: Symbol): Stock? {
        val stockToDelete = getSingleStock(symbol.symbol)
        return if(stockToDelete !== null){
            stockRepository.removeBySymbol(stockToDelete.symbol)
            stockToDelete
        }else{
            null
        }
    }

    fun updateUser(stock: Stock): Stock? {
        var existingStock = getSingleStock(stock.symbol)
        if (existingStock !== null) {
            existingStock?.company = stock?.company.toString()
            existingStock?.description = stock?.description.toString()
            existingStock?.initial_price = stock?.initial_price?.toInt()!!
            existingStock?.price_2002 = stock?.price_2002?.toInt()!!
            existingStock?.price_2007 = stock?.price_2007?.toInt()!!
            return stockRepository.save(existingStock)
        } else {
            return null
        }
    }

}