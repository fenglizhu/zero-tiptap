import { HTMLElementEvent, MenuOptions, SN } from "../types";
import { renderElement, renderTabElement } from "../utils/render-dom";
import { removeTabClass } from "./tab-operation";
import { ZeroEditor } from "../core/ZeroEditor";
import { addClass, querySelector, removeClass } from "../utils/dom";
import { 
  DATA_NE_TYPE,
  MENU_ATTR_NAME, 
  MENU_ITME_CLASS_NAME, 
  MENU_ITME_SELECTED_CLASS, 
  TAB_ITEM_CLASS_NAME, 
  TAB_ITME_ACTIVE_CLASS
} from "../constant";

export class MenuButton{
  dropdownShow: boolean;
  element!: Element | void;
  options: MenuOptions;
  constructor(options: MenuOptions) {
    this.dropdownShow = false;
    this.options = options
    this.createButton(options)
  }

  public createButton(options: MenuOptions) {

    const { toggleCommand, toolTips, dropdown, dataNeType, src, htmlOption } = options;

    const elementMap = {
      type: 'div',
      props: {
        type: 'div',
        className: MENU_ITME_CLASS_NAME,
        setData: {
          [DATA_NE_TYPE]: dataNeType || '',
        },
        onClick: function(pointerEvent: HTMLElementEvent<HTMLElement>) {
          const parentElement: HTMLElement = pointerEvent.target.parentElement as HTMLElement
          if (dropdown) {
            removeTabClass(parentElement)
            pointerEvent.currentTarget.classList.toggle('display-tab')
          }
          // TODO:点击字体颜色和背景颜色切换BUG
          
          toggleCommand && toggleCommand(pointerEvent)
          pointerEvent.stopPropagation()
        },
        nodeValue: '',
        children: [
          {
            type: 'img', 
            props:{
              type: 'img',
              src,
              className: 'svg-icon',
              nodeValue: ''
            }
          },
          {
            type: 'div', 
            props: {
              type:'div',
              className: 'editor-menu-tool-tip',
              nodeValue: toolTips
            }
          }
        ]
      }
    };
    
    this.element = renderElement(elementMap, querySelector('#zero-editor-menu'));
    if(dropdown && htmlOption) {
      const tapPane = renderTabElement(htmlOption) as Node
      this.element!.appendChild(tapPane)
    }
  }

  /**
   * setActiveMenus
   */
   public setActiveMenus(zeroEditor: ZeroEditor) {
    const dataNeType:string = this.options.dataNeType!;
    const menuKey : string = this.options.menuType! || this.options.dataNeType!;
    const menuBarOption: MenuOptions = zeroEditor.menusBar.menuElementMap[menuKey]?.options;

    if(menuBarOption.activeIsObject && menuBarOption.dropdown && menuBarOption.setActiveRules) {
      const activeItem = this.getActiveItem(zeroEditor, menuBarOption);
      this.setTabPaneActive(dataNeType, activeItem);
      this.activeMenu(dataNeType, !!activeItem);
      return
    }

    this.activeMenu(dataNeType, zeroEditor.editor.isActive(dataNeType))
  }

  /**
   * 
   */
  getActiveItem(zeroEditor: ZeroEditor, menuBarOption: MenuOptions) {
    const dropdown = menuBarOption.dropdown || [];
    let activeItem: SN = '';
    for (let i = 0; i < dropdown.length; i++) {
      const item = dropdown[i]
      const params = menuBarOption.setActiveRules && menuBarOption.setActiveRules(item);
      if(zeroEditor.editor.isActive(...params)) {
        activeItem = item
        break
      }
    }
    return activeItem
  }

  /**
   * 激活菜单下拉框样式
   */
  setTabPaneActive(dataNeType: string, activeItem: SN) {

    const isActiveMenu: HTMLElement = querySelector(`.${MENU_ITME_CLASS_NAME}[${DATA_NE_TYPE}="${dataNeType}"]`);

    // 删除之前已经有的激活项
    const lastSelectedBox: HTMLElement = querySelector(`.${TAB_ITME_ACTIVE_CLASS}`, isActiveMenu);
    removeClass(lastSelectedBox, TAB_ITME_ACTIVE_CLASS);

    // 添加新的激活项
    if(activeItem) {
      const isActivepane = querySelector(`.${TAB_ITEM_CLASS_NAME}[${MENU_ATTR_NAME}="${activeItem}"]`, isActiveMenu);
      addClass(isActivepane, TAB_ITME_ACTIVE_CLASS);
    }
  }

  /**
   * 为选中菜单添加或者删除类名
   * @param dataNeType 菜单类型
   * @param isActive 
   */
  private activeMenu(dataNeType: string, isActive: boolean) {
    const isActiveMenu: HTMLElement = querySelector(`.${MENU_ITME_CLASS_NAME}[${DATA_NE_TYPE}="${dataNeType}"]`)
    if (isActive) {
      addClass(isActiveMenu, MENU_ITME_SELECTED_CLASS)
    } else {
      removeClass(isActiveMenu, MENU_ITME_SELECTED_CLASS)
    }
  }
}
