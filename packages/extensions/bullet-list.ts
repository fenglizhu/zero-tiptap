import{ BulletList as TiptapBulletList }from '@tiptap/extension-bullet-list'
import { CoustomOptions, MenuOptions } from '../types'

export default class BulletList {
  extension: Record<string, any>;
  constructor({
    showMenu = true,
    toolTips = '点列表'
  }: CoustomOptions = {}) {
    const ZeroBulletList: Record<string, any> = TiptapBulletList.extend()
    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      dataNeType: 'bulletList',
      src: '/src/assets/images/list-unordered.svg',
      toggleCommand: function () {
        this.editor.commands.toggleBulletList();
      }
    }
    ZeroBulletList.menusOptions = menusOptions;
    this.extension = ZeroBulletList
  }
}