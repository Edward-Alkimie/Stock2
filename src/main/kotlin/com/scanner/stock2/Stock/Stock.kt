package com.scanner.stock2.Stock

import lombok.Generated
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "stocks")
data class Stock (
    @Id
    @Generated
    val id: ObjectId?,
    ///@field:Pattern
    var company: String,
    var description: String,
    var initial_price: Int,
    var price_2002: Int,
    var price_2007: Int,
    val symbol: String
)