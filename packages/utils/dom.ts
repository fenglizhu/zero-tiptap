export const querySelector = (options: string, parentElement: Document | HTMLElement = document): HTMLElement => {
  return parentElement.querySelector(options)!
}

export const removeClass = (element: HTMLElement | Element, className: string) => {
  element && element.classList.remove(className)
}

export const addClass = (element: HTMLElement | Element, className: string) => {
  element && element.classList.add(className)
}

export const createElement = (tag: string): HTMLElement => {
  return document.createElement(tag)
}

export const setClassName = (element: HTMLElement | Element, className: string) => {
  element.className = className
}

export const setStyleProperty = (element: HTMLElement, propertyName: string, value: string) => {
  element.style.setProperty(propertyName, value)
}

export const setAttribute = (element: HTMLElement, name: string, value: string) => {
  element.setAttribute(name, value)
}
