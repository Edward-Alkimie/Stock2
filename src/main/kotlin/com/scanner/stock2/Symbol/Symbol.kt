package com.scanner.stock2.Symbol

import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "stocks")
data class Symbol (
    val symbol: String
)