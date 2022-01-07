import AuthorModel from '../models/authorModel'
import connectDB from '../db'
let conn

beforeAll(async () => {
  conn = await connectDB()
  await conn.getConnection()
})

afterAll(async () => {
  await conn.end()
})

describe('[AuthorModel]', () => {
  const schema = {
    userId: expect.any(Number),
    userName: expect.any(String),
    createdAt: expect.anything(),
    updatedAt: expect.anything()
  }
  const createdUserName = 'Alice'
  const updatedUserName = 'Bob'
  let _userId

  test('Create User', async () => {
    _userId = await AuthorModel.createUser(conn, { userName: createdUserName })
    const author = await AuthorModel.selectUser(conn, _userId)
    // Check Data
    expect(author).not.toBeUndefined()

    // Check Content
    expect(author.userName).toEqual(createdUserName)
  })

  test('Select All User', async () => {
    const users = await AuthorModel.selectAll(conn)

    // Check Type
    expect(users).toMatchObject(expect.any(Array))
  })

  test('Select User', async () => {
    const users = await AuthorModel.selectAll(conn)
    const user = await AuthorModel.selectUser(conn, _userId)
    // Check Data
    expect(users).not.toBeUndefined()

    // Check Type
    expect(user).toMatchObject(schema)

    // Check Content
    expect(user.userName).toEqual(createdUserName)
  })

  test('Update User', async () => {
    _userId = await AuthorModel.updateUser(conn, { userId: _userId }, { userName: updatedUserName })
    const author = await AuthorModel.selectUser(conn, _userId)
    // Check Data
    expect(author).not.toBeUndefined()

    // Check Content
    expect(author.userName).toEqual(updatedUserName)
  })

  test('Delete User', async () => {
    const msg = await AuthorModel.deleteUser(conn, _userId)
    const author = await AuthorModel.selectUser(conn, _userId)
    // Check Data
    expect(author).toBeUndefined()

    // Check Content
    expect(msg).toEqual(`Delete user ${_userId} successful!`)
  })
})
