# 安装
npm install -g @vue/cli

# 命令
```
vue create
# 创建项目

npm install -g @vue/cli-service-global
# 安装 快速原型开发 支持 针对单个 .vue
vue server
# 快速原型开发
  -o, --open  打开浏览器
  -c, --copy  将本地 URL 复制到剪切板
  -h, --help  输出用法信息
vue serve
# 默认调试的就是App.vue 一般会需要 根组件调试 npm run server

vue serve  Test.vue
# 有副作用 在Test.vue所在目录生成 node_modules目录 （不预期） 
vue serve  ./src/components/Test.vue
# 复用项目根目录的  node_modules 里面的文件

vue ui
# 可视化vue项目管理工具
```

vue-cli-service
npm run server


npm run build