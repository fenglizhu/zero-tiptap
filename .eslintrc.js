module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    semi: ['error', 'never'], // 禁止在语句末尾使用分号
    eqeqeq: 2, // 要求使用 === 和 !== (eqeqeq)
    quotes: ['error', 'single'], // 强制使用一致的反勾号、双引号或单引号
    indent: ['error', 2, { SwitchCase: 1 }], // 强制使用一致的缩进
    'no-var': 2, // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-use-before-define': 0, // 禁止在 函数/类/变量 定义之前使用它们
    'prefer-const': 2, // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'no-irregular-whitespace': 1, // 禁止不规则的空白
    'no-dupe-keys': 2, // 禁止在对象字面量中出现重复的键
    'key-spacing': ['error', { beforeColon: false }], // 禁止在对象字面量的键和冒号之间存在空格
    'quote-props': ['error', 'as-needed'], // 当没有严格要求时，禁止对象字面量属性名称使用引号
    'object-shorthand': 2, // 要求对象字面量简写语法
    'no-empty': ['error', { allowEmptyCatch: true }], // 禁止空块语句
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }], // 禁止未使用过的变量
    'no-param-reassign': 1, // 禁止对函数参数再赋值
    'no-useless-catch': 1, // 禁止不必要的 catch 子句
    'array-callback-return': 1, // 强制数组方法的回调函数中有 return 语句
    'no-invalid-this': 0, // 禁止 this 关键字在类或类对象之外出现
    'no-self-assign': 2, // 禁止自身赋值
    'guard-for-in': 0, // 需要约束 for-in
    'no-useless-escape': 1, // 禁用不必要的转义
    'jsx-quotes': ['error', 'prefer-double'], // 强制在 JSX 属性中使用一致的单引号或双引号
    'arrow-spacing': 2, // 要求箭头函数的箭头之前或之后有空格
    'arrow-parens': ['error', 'as-needed'], // 要求箭头函数的参数使用圆括号;在可以省略括号的地方强制不使用括号
    'object-curly-spacing': ['error', 'always'], // 强制在花括号中使用一致的空格
    'array-bracket-newline': ['error', { multiline: true }], // 强制换行后打开和关闭数组括号
    'no-dupe-args': 2, // 禁止在 function 定义中出现重复的参数
    'prefer-rest-params': 2, // 建议使用剩余参数代替 arguments
    'comma-spacing': 2, // 强制在逗号周围使用空格
    'computed-property-spacing': 2,
    'func-call-spacing': 2, // 禁止或强制在计算属性中使用空格
    'keyword-spacing': 2, // 强制关键字周围空格的一致性
    'space-in-parens': 2, // 禁止或强制圆括号内的空格
    'space-infix-ops': 2, // 要求中缀操作符周围有空格
    'spaced-comment': 2, // 要求或禁止在注释前有空白
    'space-before-function-paren': [
      // 要求或禁止函数圆括号之前有一个空格
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'prefer-destructuring': [
      // 优先使用数组和对象解构
      'warn',
      {
        VariableDeclarator: {
          array: false,
          object: true
        },
        AssignmentExpression: {
          array: true,
          object: false
        }
      }
    ]
  }
}
