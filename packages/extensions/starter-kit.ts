import TiptapStarterKit from '@tiptap/starter-kit'
import { MenuOptions } from '../types'

export default class StarterKit {
  extension: Record<string, any>
  constructor() {
    const ZeroStarterKit:any = TiptapStarterKit
    const menusOptions: MenuOptions = {
      showMenu: false
    }
    ZeroStarterKit.menusOptions = menusOptions
    this.extension = ZeroStarterKit
  }
}