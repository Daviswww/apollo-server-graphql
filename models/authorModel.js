import connectDB from '../db'

/* eslint-disable no-unused-vars */
class AuthorModel {
  async selectAll () {
    try {
      const sql = 'SELECT * FROM User;'
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)

      return rows
    } catch (err) {
      console.log(`[ERROR] AuthorModel.selectAll :\n ${err}`)
    }
  }

  async selectUser (userId) {
    const _userId = userId

    try {
      const sql = `SELECT * FROM User WHERE user_id=${_userId};`
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)

      return rows[0]
    } catch (err) {
      console.log(`[ERROR] AuthorModel.selectUser :\n ${err}`)
    }
  }

  async createUser (args) {
    let userName = ''
    if ('user_name' in args) userName = args.user_name

    try {
      const sql = `INSERT INTO User (user_name) VALUES ('${userName}');`
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)

      return rows.insertId
    } catch (err) {
      console.log(`[ERROR] AuthorModel.createUser :\n ${err}`)
    }
  }

  async updateUser (args, author) {
    const userId = args.userId
    const userName = author.user_name
    console.log(args)
    try {
      const sql = `UPDATE User SET user_name = '${userName}' WHERE user_id = ${userId};`
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)

      return userId
    } catch (err) {
      console.log(`[ERROR] AuthorModel.updateUser :\n ${err}`)
    }
  }

  async deleteUser (userId) {
    const _userId = userId

    try {
      const sql = `DELETE from User WHERE user_id = ${_userId};`
      const conn = await connectDB()
      const [rows, fields] = await conn.query(sql)

      return `Delete user ${_userId} successful!`
    } catch (err) {
      console.log(`[ERROR] AuthorModel.deleteUser :\n ${err}`)
    }
  }
}
/* eslint-disable no-unused-vars */

export default new AuthorModel()
