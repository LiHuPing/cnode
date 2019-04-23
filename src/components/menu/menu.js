
import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import { showMenu, changeCata } from '../../redux/actions'
import { AtDrawer } from 'taro-ui'
import './menu.less'
@connect(state => ({ menu: state.menu }), { showMenu, changeCata })
export default class Menu extends Component {
  showMenu() {
    this.props.showMenu()
  }
  clickCata(index) {
    const { cataData } = this.props.menu
    this.props.changeCata(cataData[index])
  }
  render() {
    const { cataData, currentCata, showDrawer } = this.props.menu
    const items = cataData.map(item => item.value)
    return (
      < View>
        <View className='menu'>
          <Image src={require('../../assets/img/cata.png')} className='menu-img' onClick={this.showMenu.bind(this)}></Image>
          <Text>{currentCata.value}</Text>
          <Image src={require('../../assets/img/login.png')} className='menu-img'></Image>
        </View>
        <AtDrawer
          show={showDrawer}
          mask
          left
          items={items}
          onClose={this.showMenu.bind(this)}
          onItemClick={this.clickCata.bind(this)}
        ></AtDrawer>
      </View>
    )
  }
}