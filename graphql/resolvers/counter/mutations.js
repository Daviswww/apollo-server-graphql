import pubsub from '../../utils/pubsub'
import counterModel from '../../../models/counterModel'

const counterMutations = {
  updateCounter: async (_, args) => {
    const counter = await counterModel.selectCount(args.countId) + args.counterValue
    await counterModel.updateCount(args, counter)
    pubsub.publish('ON_UPDATE_COUNTER', { onUpdateCounter: counter })

    return counter
  }
}

export default counterMutations
