package com.scanner.stock2.UserGraph

import org.springframework.stereotype.Service

@Service
class UserGraphService (
    val userGraphRespository: UserGraphRepository
){
    fun postGraph(userGraph: UserGraph): Boolean{
        userGraphRespository.save(userGraph)
        return true
    }
    fun getAllUserGraph(): MutableIterable<UserGraph> {
        return userGraphRespository.findAll()
    }

    fun groupObjectsIntoArrays(objects: MutableIterable<UserGraph>): Collection<List<UserGraph>> {
        val byGroupNumber = objects.groupBy { it.graphNumber }
        return byGroupNumber.values
    }
}