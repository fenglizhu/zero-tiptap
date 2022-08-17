
import { Extension, Editor } from '@tiptap/core'
import { MenuButton } from './menu-button'
import { removeTabClass } from './tab-operation'
import { ZeroEditor } from '../core/ZeroEditor'

export default class MenusBar {
  dropdownShow: boolean
  menuElement: Element
  menuElementMap: Record<string, any>
  constructor(menus:Extension, editor:Editor, menuElement: Element) {
    this.dropdownShow = false
    this.menuElement = menuElement
    this.menuElementMap = {}
    this.initMenus(menus)
    this.hideDropdown()
  }

  /**
   * initMenus
   */
  public initMenus(menus: Extension | any) {
    menus.forEach((element: any) => {
      this.menuElementMap[element.name] = new MenuButton(element.menusOptions)
    })
  }

  /**
   * setActiveMenus
   */
  public setActiveMenus(zeroEditor: ZeroEditor) {
    for (const key in this.menuElementMap) {
      this.menuElementMap[key].setActiveMenus(zeroEditor)
    }
    
  }

  /**
   * hideDropdown
   */
  public hideDropdown() {
    document.onclick = function () {
      removeTabClass()
    }
  }
}