import { Blockquote as TiptapBlockquote } from '@tiptap/extension-blockquote'
import { CoustomOptions, MenuOptions } from '../types'

export default class BlockQuote {
  extension: Record<string, any>
  constructor({ showMenu = true, toolTips = '引用' }: CoustomOptions = {}) {
    const ZeroBlockquote: Record<string, any> = TiptapBlockquote.extend()

    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      dataNeType: 'blockquote',
      src: '/src/assets/images/double-quotes-r.svg',
      toggleCommand() {
        this.editor.commands.toggleBlockquote()
      },
    }
    ZeroBlockquote.menusOptions = menusOptions
    this.extension = ZeroBlockquote
  }
}
