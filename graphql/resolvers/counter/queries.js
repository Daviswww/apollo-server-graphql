import counterModel from '../../../models/counterModel'
import connectPool from '../../../db'

const counterQueries = {
  counter: async (_, args) => {
    const count = await counterModel.selectCount(connectPool, args.countId)

    return count
  }
}

export default counterQueries
