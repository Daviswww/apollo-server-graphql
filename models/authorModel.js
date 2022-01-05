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
      const sql = `SELECT * FROM User WHERE userId=${_userId};`
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)

      return rows[0]
    } catch (err) {
      console.log(`[ERROR] AuthorModel.selectUser :\n ${err}`)
    }
  }

  async createUser (args) {
    let _userName = ''
    if ('userName' in args) _userName = args.userName

    try {
      const sql = `INSERT INTO User (userName) VALUES ('${_userName}');`
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)

      return rows.insertId
    } catch (err) {
      console.log(`[ERROR] AuthorModel.createUser :\n ${err}`)
    }
  }

  async updateUser (args, author) {
    const _userId = args.userId
    const _userName = author.userName

    try {
      const sql = `UPDATE User SET userName = '${_userName}' WHERE userId = ${_userId};`
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)

      return _userId
    } catch (err) {
      console.log(`[ERROR] AuthorModel.updateUser :\n ${err}`)
    }
  }

  async deleteUser (userId) {
    const _userId = userId

    try {
      const sql = `DELETE from User WHERE userId = ${_userId};`
      const conn = await connectDB()
      const [rows, fields] = await conn.query(sql)

      return `Delete user ${_userId} successful!`
    } catch (err) {
      console.log(`[ERROR] AuthorModel.deleteUser :\n ${err}`)
    }
  }
}

export default new AuthorModel()
