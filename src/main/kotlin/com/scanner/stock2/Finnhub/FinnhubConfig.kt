package com.scanner.stock2.Finnhub

import io.finnhub.api.apis.DefaultApi
import io.finnhub.api.infrastructure.ApiClient
import org.springframework.beans.factory.annotation.Configurable
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class FinnhubConfig {
    var apiClient: DefaultApi = DefaultApi()

    @Bean
    fun finnhubApi():DefaultApi{
        val apiKey = "cg2mgb1r01qq9k49eik0cg2mgb1r01qq9k49eikg"
        ApiClient.apiKey["token"] = apiKey // Replace with your API key
        return apiClient
    }
}