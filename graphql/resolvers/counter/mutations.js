import pubsub from '../pubsub'
const counter = 0
const counterMutations = {
  updateCounter: async (_, args) => {
    try {
      pubsub.publish('ON_UPDATE_COUNTER', { onUpdateCounter: counter + args.number })
      return counter
    } catch (err) {
      console.log(err)
    }
  }
}

export default counterMutations
