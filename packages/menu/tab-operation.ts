import { querySelector, removeClass } from "../utils/dom"

export const removeTabClass = (target?: HTMLElement) => {
  const childrenElement = querySelector('#zero-editor-menu').children || []
  for (let i = 0; i < childrenElement.length; i++) {
    if((target && childrenElement[i] !== target) || !target) {
      removeClass(childrenElement[i], 'display-tab')
    }
  }
}
