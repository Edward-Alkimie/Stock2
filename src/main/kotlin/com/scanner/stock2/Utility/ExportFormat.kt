package com.scanner.stock2.Utility

import kotlin.reflect.full.*

import com.scanner.stock2.UserGraph.UserGraph
import org.bson.types.ObjectId

val info = arrayListOf<UserGraph> (
    UserGraph(ObjectId(), "kevin", 1, "annual", "eps", "#00FF00"),
    UserGraph(ObjectId(), "kevin", 1, "annual", "ebitPerShare", "#00FF00"),
    UserGraph(ObjectId(), "kevin", 2, "quarterly", "grossMargin", "#00FF00"),
    UserGraph(ObjectId(), "kevin", 2, "quarterly", "fcfMargin", "#00FF00")
)


inline fun <reified T> groupObjectsIntoArrays(objects: Array<T>, propertyName: String): Array<Array<T>> {
    val groupedObjects = mutableMapOf<Any, MutableList<T>>()

    objects.forEach { obj  ->
        val propertyValue = obj
        println(obj)
//        val propertyValue = obj.javaClass.getDeclaredField(propertyName).apply { isAccessible = true }.get(obj)
//        groupedObjects.getOrPut(propertyValue) { mutableListOf() }.add(obj)
    }

    return groupedObjects.values.map { it.toTypedArray() }.toTypedArray()
}
