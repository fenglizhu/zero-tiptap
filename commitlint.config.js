module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build', // 依赖相关的内容
        'chore', // 改变构建流程或者依赖库等变动
        'ci', // ci配置相关
        'docs', // 文档修改
        'feat', // 增加新功能
        'fix', // 修复bug
        'perf', // 性能优化
        'refactor', // 代码重构
        'revert', // 回滚到上一版本
        'style', // 样式修改、空格逗号缩进等
        'test' // 增加测试用例
      ]
    ]
  }
}
