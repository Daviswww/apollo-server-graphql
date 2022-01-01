import AuthorModel from '../../../models/authorModel'

const authorQueries = {
  authors: async (_, args) => {
    const users = await AuthorModel.selectAll()
    return users
  },
  author: async (_, args) => {
    const user = await AuthorModel.selectUser(args.id)

    return user
  }
}

export default authorQueries
