package com.scanner.stock2.UserGraph

import lombok.Generated
import org.bson.types.ObjectId
import org.springframework.data.annotation.Id


data class UserGraph (

    @Id
    @Generated
    val id: ObjectId?,
    var userName: String,
    var graphNumber: Int,
    var timeFrame: String,
    var value: String,
    var color: String
)