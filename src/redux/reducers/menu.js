import { CHECK, CHANGE_CATA } from '../action-types'

const menuState = {
  cataData: [
    { key: "all", value: "全部" },
    { key: "good", value: "精华" },
    { key: "share", value: "分享" },
    { key: "ask", value: "问答" },
    { key: "job", value: "招聘" },
    { key: "dev", value: "客户端测试" }
  ],
  currentCata: { key: "all", value: "全部" },
  showDrawer: false
}
export default function menu(prevState = menuState, action) {
  switch (action.type) {
    case CHECK:
      const showDrawer = !prevState.showDrawer
      return { ...prevState, showDrawer }
    case CHANGE_CATA:
      const currentCata = action.data
      console.log(currentCata.value)
      return { ...prevState, currentCata }
    default:
      return prevState
  }
}