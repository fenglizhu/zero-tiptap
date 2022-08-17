import { CodeBlock as TiptapCodeBlock } from '@tiptap/extension-code-block'
import { CoustomOptions, MenuOptions } from '../types'

export default class CodeBlock {
  extension: Record<string, any>
  constructor({
    showMenu = true,
    toolTips = '代码块'
  }: CoustomOptions = {}) {
    const ZeroCodeBlock: Record<string, any> = TiptapCodeBlock.extend()

    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      dataNeType: 'codeBlock',
      src: 'src/assets/images/code-s-slash-line.svg',
      toggleCommand() {
        this.editor.commands.toggleCodeBlock()
      }
    }
    ZeroCodeBlock.menusOptions = menusOptions
    this.extension = ZeroCodeBlock
  }
}