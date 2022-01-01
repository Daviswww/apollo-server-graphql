import connectDB from '../db'

/* eslint-disable no-unused-vars */
class AuthorModel {
  async selectAll () {
    try {
      const conn = await connectDB()
      const sql = 'SELECT * FROM User'

      const [rows, fields] = await conn.execute(sql)

      return rows
    } catch (err) {
      console.log(err)
    }
  }

  async selectUser (id) {
    const userId = id

    try {
      const conn = await connectDB()
      const sql = `SELECT * FROM User WHERE user_id=${userId};`
      const [rows, fields] = await conn.execute(sql)

      return rows[0]
    } catch (err) {
      console.log(err)
    }
  }

  async createUser (args) {
    let userName = ''
    if ('user_name' in args) userName = args.user_name

    try {
      const conn = await connectDB()
      const sql = `INSERT INTO User (user_name) VALUES ('${userName}')`
      const [rows, fields] = await conn.execute(sql)

      return rows.insertId
    } catch (err) {
      console.log(err)
    }
  }

  async updateUser (args, author) {
    const userId = args.id
    const userName = author.user_name

    try {
      const conn = await connectDB()
      const sql = `UPDATE User SET user_name = '${userName}' WHERE user_id = ${userId};`
      const [rows, fields] = await conn.execute(sql)

      return rows
    } catch (err) {
      console.log(err)
    }
  }

  async deleteUser (id) {
    const userId = id

    try {
      const conn = await connectDB()
      const sql = `DELETE from User WHERE user_id = ${userId};`
      const [rows, fields] = await conn.query(sql)

      return `Delete user ${id} successful!`
    } catch (err) {
      console.log(err)
    }
  }
}
/* eslint-disable no-unused-vars */

export default new AuthorModel()
