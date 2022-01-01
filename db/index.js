import { db } from '../config/environment'
import mysql from 'mysql2/promise'

let connectionPool = null

const connectDB = async () => {
  try {
    if (connectionPool != null) {
      return await connectionPool
    }
    connectionPool = mysql.createPool({
      host: db.host,
      user: db.user,
      password: db.password,
      database: db.name,
      port: db.port
    })
    console.log('Connected to database')
    return await connectionPool.getConnection()
  } catch (err) {
    console.log(err)
  }
}

export default connectDB
