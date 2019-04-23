import { RECEIVE_TOPICLIST} from '../action-types'

const topicState = {
    page: 1,
    limit: 20,
    list:[]
}
export default function topicList(prevState = topicState, action) {
  switch (action.type) {
    case RECEIVE_TOPICLIST:
      const list = action.data
      return {...prevState,list}
    default:
      return prevState
  }
}