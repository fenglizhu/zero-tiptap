import { TaskList as TiptapTaskList } from '@tiptap/extension-task-list'
import { CoustomOptions, MenuOptions } from '../types'

export default class TaskList {
  extension: Record<string, any>
  constructor({
    showMenu = true,
    toolTips = '任务列表'
  }: CoustomOptions = {}) {
    const ZeroTaskList: Record<string, any> = TiptapTaskList.extend()
    // TODO: 
    const menusOptions: MenuOptions = {
      showMenu,
      toolTips,
      dataNeType: 'taskList',
      src: 'src/assets/images/task-line.svg',
      toggleCommand() {
        // debugger
        this.editor.commands.toggleTaskList({
          lineHeight: 1.5
        })
      }
    }

    ZeroTaskList.menusOptions = menusOptions
    this.extension = ZeroTaskList
  }
}