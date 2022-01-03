import AuthorModel from '../../../models/authorModel'

const authorMutations = {
  createAuthor: async (_, args) => {
    const userId = await AuthorModel.createUser(args.author)
    const user = await AuthorModel.selectUser(userId)

    return user
  },
  updateAuthor: async (_, args) => {
    const userId = await AuthorModel.updateUser(args, args.author)
    const user = await AuthorModel.selectUser(userId)

    return user
  },
  deleteAuthor: async (_, args) => {
    const req = await AuthorModel.deleteUser(args.userId)

    return req
  }
}

export default authorMutations
