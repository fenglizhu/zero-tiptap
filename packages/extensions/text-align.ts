import { MenuOptions, HTMLElementEvent } from '../types'
import { TextAlign as TiptapTextAlign } from '@tiptap/extension-text-align'
import { HTML_TYPE, MENU_ATTR_NAME } from '../constant'

interface TextAlignOptions extends MenuOptions {
  types?: string[],
  alignments?: string[],
  defaultAlignment?: string,
}

const alignmentsMap = new Map([
  ['left', '左对齐'],
  ['center', '居中对齐'],
  ['right', '右对齐'],
  ['justify', '两端对齐']
])

export default class TextAlign {
  extension: Record<string, any>
  constructor({
    types = ['heading', 'paragraph'],
    alignments = ['left', 'center', 'right', 'justify'],
    defaultAlignment = 'left',
    showMenu = true,
    toolTips = '对齐方式'
  }: TextAlignOptions = {}) {
    const ZeroTextAlign: Record<string, any> = TiptapTextAlign.extend({
      addOptions() {
        return {
          types,
          alignments,
          defaultAlignment
        }
      }
    })

    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      dropdown: alignments,
      dataNeType: 'textAlign',
      activeIsObject: true,
      setActiveRules: (textAlign: string) => {
        return [{ textAlign }]
      },
      htmlOption: {
        type: HTML_TYPE.HTML,
        tagAndText: alignments.map((item: string) => {
          return {
            tag: 'div',
            text: alignmentsMap.get(item),
            dataAttr: item,
          }
        })
      },
      src: 'src/assets/images/align-left.svg',
      toggleCommand(pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element: Element = pointerEvent.target
        const align: string | null = element.getAttribute(MENU_ATTR_NAME)
        this.editor.commands.setTextAlign(align)
      }
    }

    ZeroTextAlign.menusOptions = menusOptions
    this.extension = ZeroTextAlign
  }
}
