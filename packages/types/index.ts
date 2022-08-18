/* eslint-disable no-unused-vars */
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
  toggleCommand?: (point: HTMLElementEvent<HTMLElement>) => void
  dropdown?: SN[]
  menuType?: string
  activeIsObject?: boolean
  src?: string
  htmlOption?: object
  setActiveRules?: (color: any) => any
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}

export type ReturnHTMLElement = HTMLElement | string | undefined
