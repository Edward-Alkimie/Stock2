package com.scanner.stock2

import com.scanner.stock2.Stock.Stock
import com.scanner.stock2.Stock.StockRepository
import com.scanner.stock2.Stock.StockService
import io.mockk.every
import io.mockk.mockk
import io.mockk.verify
import org.bson.types.ObjectId
import org.junit.jupiter.api.Test

import org.junit.jupiter.api.Assertions.*
import org.junit.jupiter.api.extension.ExtendWith

import org.springframework.boot.test.context.SpringBootTest
import org.springframework.context.annotation.Profile
import org.springframework.test.context.junit.jupiter.SpringExtension

@ExtendWith(SpringExtension::class)
@SpringBootTest
@Profile("test")
class StockServiceTest {
//    val symbol: Symbol = mockk()
    val stockRepository: StockRepository = mockk()
     //@Autowired
     //lateinit var testRepository: TestRepository
    //@Autowired
//    lateinit var stockRepository: StockRepository

    val stockService = StockService(stockRepository)



    @Test
    fun `given a test stock in the repository, when you call the getAllStocks method, then it will return the test stock`() {
        val objectId = ObjectId()
        val stock = Stock(objectId ,"abc campany","ABC company doing ABC things",12,13,400, "ABC")
        val stockList = listOf(stock)
        //given
        every { stockRepository.findAll() } returns stockList
        //when
        val result = stockService.getAllStocks()
        //then
        assertEquals(stockList, result)


    }

    @Test
    fun getSingleStock(s: String) {
        val objectId = ObjectId()
        val stock = Stock(objectId ,"abc campany","ABC company doing ABC things",12,13,400, "ABC")
//        val stockList = listOf(stock)
        //given
        every { stockRepository.findBySymbol("ABC") } returns stock
        //when
        val result = stockService.getSingleStock("ABC")
        //
        assertEquals(stock, result)
        print("hello world")

    }

    @Test
    fun saveStock() {
        val objectId = ObjectId()
        val stock = Stock(objectId ,"abc campany","ABC company doing ABC things",12,13,400, "ABC")
        //given
        every { stockService.getSingleStock(any()) } returns null
        every { stockRepository.save(stock) } returns stock

        val result = stockService.saveStock(stock)
        verify {stockRepository.save(stock)}
        assertEquals(stock, result)
    }

    @Test
    fun deleteBySymbol() {
//        val objectId = ObjectId()
//        val stock = Stock(objectId ,"abc campany","ABC company doing ABC things",12,13,400, "ABC")
//        val symbol = Symbol("ABC")
//        every { stockService.deleteBySymbol(symbol) } just runs
//
//        stockService.deleteBySymbol(symbol)
//        verify { stockService.deleteBySymbol(symbol) }

    }

    @Test
    fun updateUser() {
    }

}


