import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './topic.less'
export default class Topic extends Component {
  render() {
    const { author } = this.props.item
   console.log(author)
    return (
      <View className='topic'>
        <View className='avatar'>
          <Image src={author.avatar_url}></Image>
        </View>
        <View className='info'>
          <View></View>
          <View></View>
        </View>
      </View>
    )
  }
}