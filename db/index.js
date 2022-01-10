// https://github.com/sidorares/node-mysql2
import { db } from '../config/environment'
import mysql from 'mysql2/promise'

let connectionPool

const pool = () => {
  try {
    if (connectionPool !== undefined) {
      return connectionPool
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
    console.error(err)
  }
}

export default pool()
