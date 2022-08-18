import { Italic as TiptapItalic } from '@tiptap/extension-italic'
import { CoustomOptions, MenuOptions } from '../types'
export default class Italic {
  extension: Record<string, any>
  constructor({ showMenu = true, toolTips = '斜体' }: CoustomOptions = {}) {
    const ZeroItalic: any = TiptapItalic.extend()

    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      dataNeType: 'italic',
      src: 'src/assets/images/italic.svg',
      toggleCommand() {
        this.editor.commands.toggleItalic()
      }
    }
    ZeroItalic.menusOptions = menusOptions
    this.extension = ZeroItalic
  }
}
