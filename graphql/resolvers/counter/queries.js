import counterModel from '../../../models/counterModel'

const counterQueries = {
  counter: async (_, args) => {
    const count = await counterModel.selectCount(args.countId)

    return count
  }
}

export default counterQueries
