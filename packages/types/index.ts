export interface CoustomOptions {
  showMenu?: boolean,
  toolTips?: string
}

export type SN = number | string

export interface MenuOptions {
  editor?: any;
  showMenu?: boolean,
  toolTips?: string,
  hasTab?: boolean,
  dataNeType?: string,
  toggleCommand?: Function,
  dropdown?: SN[],
  menuType?: string,
  activeIsObject?: boolean,
  src?: string,
  htmlOption?: Record<string, any>,
  setActiveRules?: Function
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T
  currentTarget: T
}

export type ReturnHTMLElement = HTMLElement | string | undefined