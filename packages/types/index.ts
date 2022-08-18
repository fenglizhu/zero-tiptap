/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export interface CoustomOptions {
  showMenu?: boolean
  toolTips?: string
}

export type SN = number | string

export interface MenuOptions {
  editor?: any
  showMenu?: boolean
  toolTips?: string
  hasTab?: boolean
  dataNeType?: string
  toggleCommand?: Function
  dropdown?: SN[]
  menuType?: string
  activeIsObject?: boolean
  src?: string
  htmlOption?: object
  setActiveRules?: Function
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}

export type ReturnHTMLElement = HTMLElement | string | undefined
