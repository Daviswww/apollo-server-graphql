import AuthorModel from '../models/authorModel'
import connectPool from '../db'


afterAll(()=>{
  connectPool.end()
})

describe('[AuthorModel]', () => {
  const schema = {
    userId: expect.any(Number),
    userName: expect.any(String),
    createdAt: expect.any(Date),
    updatedAt: expect.any(Date)
  }
  const createdUserName = 'Alice'
  const updatedUserName = 'Bob'
  let _userId

  test('Create User', async () => {
    _userId = await AuthorModel.createUser(connectPool, { userName: createdUserName })
    const author = await AuthorModel.selectUser(connectPool, _userId)
    // Check Data
    expect(author).not.toBeUndefined()

    // Check Content
    expect(author.userName).toEqual(createdUserName)
  })

  test('Select All User', async () => {
    const users = await AuthorModel.selectAll(connectPool)

    // Check Type
    expect(users).toMatchObject(expect.any(Array))
  })

  test('Select User', async () => {
    const users = await AuthorModel.selectAll(connectPool)
    const user = await AuthorModel.selectUser(connectPool, _userId)
    // Check Data
    expect(users).not.toBeUndefined()

    // Check Type
    expect(user).toMatchObject(schema)

    // Check Content
    expect(user.userName).toEqual(createdUserName)
  })

  test('Update User', async () => {
    _userId = await AuthorModel.updateUser(connectPool, { userId: _userId }, { userName: updatedUserName })
    const author = await AuthorModel.selectUser(connectPool, _userId)
    // Check Data
    expect(author).not.toBeUndefined()

    // Check Content
    expect(author.userName).toEqual(updatedUserName)
  })

  test('Delete User', async () => {
    const msg = await AuthorModel.deleteUser(connectPool, _userId)
    const author = await AuthorModel.selectUser(connectPool, _userId)
    // Check Data
    expect(author).toBeUndefined()

    // Check Content
    expect(msg).toEqual(`Delete user ${_userId} successful!`)
  })
})
