import { Heading as TiptapHeading } from '@tiptap/extension-heading'
import { HTML_TYPE, MENU_ATTR_NAME } from '../constant'
import { CoustomOptions, MenuOptions, HTMLElementEvent } from '../types'

export type Level = 1 | 2 | 3 | 4 | 5 | 6
interface HeadingOption extends CoustomOptions {
  levels?: Level[]
}

export default class Heading {
  extension: Record<string, any>
  constructor({
    showMenu = true,
    toolTips = '标题',
    levels = [1, 2, 3, 4, 5, 6]
  }: HeadingOption = {}) {
    const ZeroHeading: Record<string, any> = TiptapHeading.extend()
    
    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      hasTab: true,
      dropdown: levels,
      dataNeType: 'heading',
      activeIsObject: true,
      src: 'src/assets/images/heading.svg',
      setActiveRules: (level: number) => {
        return [
          'heading',
          {
            level
          }
        ]
      },
      htmlOption: {
        type: HTML_TYPE.HTML,
        tagAndText: levels.map((item: number) => {
          const tag = `h${item}`
          return {
            tag,
            text: `标题${item}`,
            dataAttr: item,
          }
        })
      },
      toggleCommand(pointerEvent: HTMLElementEvent<HTMLElement>) {
        const element: Element = pointerEvent.target
        const attr: string | null = element.getAttribute(MENU_ATTR_NAME)
        const level = Number(attr)
        this.editor.commands.toggleHeading({ level })
      }
    }
    ZeroHeading.menusOptions = menusOptions
    this.extension = ZeroHeading
  }
}