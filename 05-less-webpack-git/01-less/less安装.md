GUIs
Online

浏览器使用
```html
<!-- 先引入less 注意 rel="stylesheet/less" -->
<link rel="stylesheet/less" type="text/css" href="styles.less" />
<!-- 再引入less.min.js -->
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>
```

node环境使用 
提前编译好less 页面引入css

```
# 安装了node环境 附带npm

node -v
npm -v
# 包管理工具

# 安装less
npm install -g less

lessc -v
# 测试less是否安装成功

# lessc 常用命令

lessc test.less
# 编译test.less文件 输出到终端

lessc test.less test.css
# 编译test.less文件 输出到另外一个文件


# options

lessc -s lessc --silent
# 忽略警告信息 错误信息正常

lessc -v
lessc --version

lessc -h
lessc --help

lessc test.less test.css --compress /-x

--source-map-inline
# 生成行内map css文件里面

--source-map[=FILENAME]
# 生成单独的map文件

```
语法
```
@import "./reset.less";
# 引入其他less 一块编译 把css/less模块化


#变量Variables
@width: 10px;

```