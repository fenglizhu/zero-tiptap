import{ Strike as TiptapStrike }from '@tiptap/extension-strike'
import { CoustomOptions, MenuOptions } from '../types'

export default class Strike {
  extension: Record<string, any>;
  constructor({
    showMenu = true,
    toolTips = '删除'
  }: CoustomOptions = {}) {
    const ZeroStrike: any = TiptapStrike.extend()
    const menusOptions: MenuOptions = {
      showMenu: showMenu,
      toolTips: toolTips,
      dataNeType: 'strike',
      src: 'src/assets/images/strikethrough.svg',
      toggleCommand: function () {
        this.editor.commands.toggleStrike();
      }
    }
    ZeroStrike.menusOptions = menusOptions;
    this.extension = ZeroStrike
  }
}