package com.scanner.stock2.UserGraph

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*

@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
@RequestMapping("/graph")
class UserGraphController {
    @Autowired
    private lateinit var userGraphService: UserGraphService

    @GetMapping
    fun allGraph(): ResponseEntity<Collection<List<UserGraph>>> {
        val returnValue = userGraphService.groupObjectsIntoArrays(userGraphService.getAllUserGraph())
        return ResponseEntity.ok(returnValue)
    }

    @PostMapping("/add")
    fun addGraph(@RequestBody userGraph: UserGraph): ResponseEntity<Boolean>{
        val addStock = userGraphService.postGraph(userGraph)
        return ResponseEntity.ok(addStock)
    }



}