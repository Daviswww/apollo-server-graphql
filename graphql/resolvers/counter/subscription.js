import pubsub from '../pubsub'

const counterSubscription = {
  onUpdateCounter: {
    subscribe: () => pubsub.asyncIterator(['ON_UPDATE_COUNTER'])
  }
}

export default counterSubscription
