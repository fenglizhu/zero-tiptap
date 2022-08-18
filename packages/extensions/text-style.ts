import { TextStyle as TiptapTextStyle } from '@tiptap/extension-text-style'
import { MenuOptions } from '../types'

export default class TextStyle {
  extension: Record<string, any>
  constructor() {
    const ZeroTextStyle: Record<string, any> = TiptapTextStyle
    const menusOptions: MenuOptions = {
      showMenu: false
    }
    ZeroTextStyle.menusOptions = menusOptions
    this.extension = ZeroTextStyle
  }
}
