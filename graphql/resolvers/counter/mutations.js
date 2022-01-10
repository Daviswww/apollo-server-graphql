import pubsub from '../../utils/pubsub'
import counterModel from '../../../models/counterModel'
import connectPool from '../../../db'

const counterMutations = {
  updateCounter: async (_, args) => {
    const counter = await counterModel.selectCount(connectPool, args.countId) + args.counterValue
    await counterModel.updateCount(connectPool, args, counter)
    pubsub.publish('ON_UPDATE_COUNTER', { onUpdateCounter: counter })

    return counter
  }
}

export default counterMutations
