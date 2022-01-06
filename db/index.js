// https://github.com/sidorares/node-mysql2
import { db } from '../config/environment'
import mysql from 'mysql2/promise'

let connectionPool

const connectDB = async () => {
  try {
    if (connectionPool !== undefined) {
      return await connectionPool
    }
    connectionPool = mysql.createPool({
      host: db.host,
      user: db.user,
      password: db.password,
      database: db.name,
      port: db.port
    })

    return connectionPool
  } catch (err) {
    console.log(err)
  }
}

export default connectDB
