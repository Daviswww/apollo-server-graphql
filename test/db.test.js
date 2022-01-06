import connectDB from '../db'

describe('Database', () => {
  let conn

  beforeEach(async () => {
    conn = await connectDB()
  })

  test('Connection Database ', async () => {
    expect(await conn).not.toBeUndefined()
  })

  test('Disconnect Database ', async () => {
    expect(await conn.end()).toBeUndefined()
  })
})
