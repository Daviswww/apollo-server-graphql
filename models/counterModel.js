import connectDB from '../db'

/* eslint-disable no-unused-vars */
class CounterModel {
  async selectCount (countId) {
    const _countId = countId

    try {
      const sql = `SELECT * FROM Count WHERE countId=${_countId};`
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)

      return rows[0].count
    } catch (err) {
      console.error(`[ERROR] CounterModel.selectCount :\n ${err}`)
    }
  }

  async updateCount (args, counter) {
    const _countId = args.countId
    const _counter = counter

    try {
      const sql = `UPDATE Count SET count=${_counter} WHERE countId=${_countId};`
      const conn = await connectDB()
      const [rows, fields] = await conn.execute(sql)
    } catch (err) {
      console.error(`[ERROR] CounterModel.updateCount :\n ${err}`)
    }
  }
}

export default new CounterModel()
