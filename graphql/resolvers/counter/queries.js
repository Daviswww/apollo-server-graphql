import counterModel from '../../../models/counterModel'

const counterQueries = {
  counter: async () => {
    const count = await counterModel.selectCount(1)

    return count
  }
}

export default counterQueries
