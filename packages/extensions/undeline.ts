import { CoustomOptions, MenuOptions } from '../types'
import { Underline as TiptapUndeline } from '@tiptap/extension-underline'
export default class Undeline {
  extension: Record<string, any>
  constructor({ showMenu = true, toolTips = '下划线' }: CoustomOptions = {}) {
    const ZeroUnderline: Record<string, any> = TiptapUndeline.extend()
    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      dataNeType: 'underline',
      src: 'src/assets/images/underline.svg',
      toggleCommand() {
        this.editor.commands.toggleUnderline()
      }
    }
    ZeroUnderline.menusOptions = menusOptions
    this.extension = ZeroUnderline
  }
}
