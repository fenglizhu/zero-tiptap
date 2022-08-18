import { mergeAttributes } from '@tiptap/core'
import { Highlight as TiptapHighlight } from '@tiptap/extension-highlight'
import { HTML_TYPE, MENU_ATTR_NAME, STYLE_NAME, TAB_COLOR_CLASS_NAME } from '../constant'
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'
import { Colors } from '../types/color'

interface ColorOptions extends CoustomOptions {
  colors?: string[]
}

export default class Highlight {
  extension: Record<string, any>
  constructor({ colors = Colors, showMenu = true, toolTips = '背景色' }: ColorOptions = {}) {
    const ZeroHighlight: Record<string, any> = TiptapHighlight.extend({
      addOptions() {
        return {
          multicolor: true,
          HTMLAttributes: {}
        }
      },
      renderHTML({ HTMLAttributes }) {
        return ['span', mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]
      }
    })

    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      hasTab: true,
      dropdown: colors,
      dataNeType: 'highlight',
      activeIsObject: true,
      src: 'src/assets/images/paint-line.svg',
      setActiveRules: (color: string) => {
        return [
          'highlight',
          {
            color
          }
        ]
      },
      htmlOption: {
        type: HTML_TYPE.STYLE,
        styleName: STYLE_NAME.BACKGROUND_COLOR,
        tagAndText: colors,
        tabClassName: TAB_COLOR_CLASS_NAME
      },
      toggleCommand(pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element: Element = pointerEvent.target
        const color = element.getAttribute(MENU_ATTR_NAME)
        this.editor.commands.toggleHighlight({ color })
      }
    }
    ZeroHighlight.menusOptions = menusOptions
    this.extension = ZeroHighlight
  }
}
