import Taro, { Component } from '@tarojs/taro'
import { View,ScrollView } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { getTopicList } from '../../redux/actions'
import Topic from './topic'
@connect(state => ({
  menu: state.menu,
  topicList: state.topicList
}), { getTopicList })
  
export default class TopicList extends Component {
  componentDidMount() {
    const topic = this.props.menu.currentCata.value
    const { page,limit } = this.props.topicList
    this.props.getTopicList({page,topic,limit})
  }
  render() {
    const { list } = this.props.topicList
    console.log('list',list)
    return (
      <ScrollView>
        {
           list.map((item,index)=>(
            <Topic item={item} key={index}/>
          ))
        }
      </ScrollView>
    )
  }
}