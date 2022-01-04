import pubsub from '../../utils/pubsub'

const counterSubscription = {
  onUpdateCounter: {
    subscribe: () => pubsub.asyncIterator(['ON_UPDATE_COUNTER'])
  }
}

export default counterSubscription
