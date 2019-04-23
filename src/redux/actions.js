import { CHECK, CHANGE_CATA ,RECEIVE_TOPICLIST} from './action-types'
import { getJSON } from '../utils/request'
import apiObject from '../constants/api'
//同步action 
export const showMenu = () => ({ type: CHECK })
export const changeCata = currentCata => ({ type: CHANGE_CATA, data: currentCata })
const saveTopicList = data => ({ type:RECEIVE_TOPICLIST,data})
//异步action
export function getTopicList(params) {
  return async dispatch => {
    const result = await getJSON(apiObject.gettopics,params).catch(errMsg => {
      console.log('服务器繁忙，请稍后再试!')
    })
    const {data} = result.data
    console.log(data)
    if (data) {
      dispatch(saveTopicList(data))
    }
   }
 
}


