/* eslint-disable @typescript-eslint/ban-types */
import { HTML_TYPE, MENU_ATTR_NAME, TAB_CLASS_NAME, TAB_ITEM_CLASS_NAME } from '../constant'
import { ReturnHTMLElement } from '../types'
import { createElement, setAttribute, setClassName, setStyleProperty } from './dom'

// eslint-disable-next-line no-unused-vars
export const renderElement = ({ type, props = {} }: any, container: { appendChild: (arg0: any) => void; }): void => {
  const isTextElement = !type
  const element = isTextElement
    ? document.createTextNode('')
    : document.createElement(type)
  element.innerText = props.nodeValue

  Object.keys(props).forEach(p => {
    if (isAttribute(p)) element[p] = props[p]
    if (isSetData(p)) {
      for (const key in props[p]) {
        setAttribute(element, key, props[p][key])
      }
    }
    if (!isTextElement && isListener(p)) {
      element.addEventListener(p.toLowerCase().slice(2), props[p])
    }
  })

  if (!isTextElement && props.children && props.children.length){
    props.children.forEach((childElement: { type: any; props?: {} | undefined; }) =>
      renderElement(childElement, element)
    )
  } 
  
  container.appendChild(element)
  
  return element
}

const isListener = (p: string) => p.startsWith('on')
const isSetData = (p: string) => p === 'setData'
const isAttribute = (p: string) => !isListener(p) && !isSetData(p) && p !== 'children'

export const renderTabElement = (htmlOption: Record<string, any>) : ReturnHTMLElement => {
  if (!htmlOption) {
    return ''
  }
  if (htmlOption.type === HTML_TYPE.HTML) {
    return renderHTMLPane(htmlOption)
  }  
  else if (htmlOption.type === HTML_TYPE.STYLE) {
    return renderSTYLEPane(htmlOption)
  }
}

export const renderHTMLPane = (htmlOption: Record<string, any>): ReturnHTMLElement => {
  const tabPane: HTMLElement = createElement('div')
  setClassName(tabPane, TAB_CLASS_NAME)

  htmlOption.tagAndText.forEach((item: Record<string, any>) => {

    const tabItme: HTMLElement = createElement(item.tag)

    setClassName(tabItme, TAB_ITEM_CLASS_NAME)
    setAttribute(tabItme, MENU_ATTR_NAME, item.dataAttr)
    tabItme.innerText = item.text

    tabPane.appendChild(tabItme)
  })

  return tabPane
}

export const renderSTYLEPane = (htmlOption: Record<string, any>): ReturnHTMLElement => {
  const tabPane: HTMLElement = createElement('div')
  setClassName(tabPane, `${TAB_CLASS_NAME} ${htmlOption.tabClassName}`)

  htmlOption.tagAndText.forEach((item: string) => {
    const tabItme: HTMLElement = createElement('div')

    setClassName(tabItme, TAB_ITEM_CLASS_NAME)
    setStyleProperty(tabItme, htmlOption.styleName, item)
    setAttribute(tabItme, MENU_ATTR_NAME, item)

    tabPane.appendChild(tabItme)
  })

  return tabPane
}

