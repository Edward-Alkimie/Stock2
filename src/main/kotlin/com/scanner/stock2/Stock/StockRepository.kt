package com.scanner.stock2.Stock

import com.scanner.stock2.Stock.Stock
import org.bson.types.ObjectId
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface StockRepository: MongoRepository<Stock, ObjectId> {

    fun findBySymbol(symbol: String): Stock?

    fun removeBySymbol(symbol: String)
}