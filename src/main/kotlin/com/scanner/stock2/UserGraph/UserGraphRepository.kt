package com.scanner.stock2.UserGraph

import com.mysql.cj.x.protobuf.MysqlxExpr
import org.bson.types.ObjectId
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface UserGraphRepository: CrudRepository<UserGraph, ObjectId>{

}
