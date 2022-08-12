import{ TaskItem as TiptapTaskItem }from '@tiptap/extension-task-item'
import { CoustomOptions, MenuOptions } from '../types'

export default class TaskItem {
  extension: Record<string, any>;
  constructor() {
    const ZeroTaskItem: Record<string, any> = TiptapTaskItem.extend()
    const menusOptions: MenuOptions = {
      showMenu: false
    }
    ZeroTaskItem.menusOptions = menusOptions;
    this.extension = ZeroTaskItem
  }
}