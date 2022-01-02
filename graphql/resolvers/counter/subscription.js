import pubsub from '../pubsub'

const counterSubscription = {
  onUpdateCounter: async () => {
    try {
      pubsub.asyncIterator(['ON_UPDATE_COUNTER'])
    } catch (err) {
      console.log(err)
    }
  }
}

export default counterSubscription
