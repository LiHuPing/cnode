import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './index.less'
import Menu from '../../components/menu/menu'
import TopicList from '../../components/topicList/topicList'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  render() {
    return (
      <View className='index'>
        <Menu />
        <TopicList />
      </View>
    )
  }
}

