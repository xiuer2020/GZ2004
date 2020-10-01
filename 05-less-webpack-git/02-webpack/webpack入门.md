要安装最新版本或特定版本，请运行以下命令之一：
npm install --save-dev webpack
npm install --save-dev webpack@<version>

如果你使用 webpack 4+ 版本，你还需要安装 CLI。
npm install --save-dev webpack-cli

当你在本地安装 webpack 后，你能够从 node_modules/.bin/webpack 访问它的 bin 版本。

全局安装 -g --global
npm install less -g

本地安装 安装到当前目录 默认 -S --save -D --save-dev
npm install --save-dev webpack

使用全局
webpack

使用本地
node_modules/.bin/webpack
npx webpack

初始化包 package.json 包描述
npm init
npm init -y

```json
# 最终项目需要jquery 项目依赖
npm install jquery -S
"dependencies": {
    "jquery": "^1.11.3"
}

# .less文件=> .css
# .less在最终项目不需要 把项目放到服务器之前先编译好
# 开发依赖
npm install less -D
"devDependencies": {
    "less": "^3.11.1"
}

# 往服务器部署的时候 分享代码 不需要node_modules
npm install -S / -D
根据package.json 安装依赖
```



开始
npm init -y
npm install webpack webpack-cli --save-dev

# 切换npm镜像源 
## 临时切换镜像源
npm install less -g --registry=https://registry.npm.taobao.org
## 修改配置文件 C:\Users\DONG\.npmrc 永久
registry=https://registry.npm.taobao.org

<!-- ， 。 ！？  &  中文-->
<!-- - _ -->



webpack 命令概念
lessc style.less main.css


npx webpack
入口文件 src/index.js 默认
出口文件 dist/main.js 默认

WARNING 不管
```
dist目录里面 多了一个 mian.js

Hash: 14ed995229fc55640c97
Version: webpack 4.42.1
Time: 1892ms
Built at: 2020-03-31 10:46:23
  Asset      Size  Chunks             Chunk Names
main.js  72.1 KiB       0  [emitted]  main
Entrypoint main = main.js
[1] ./src/index.js 472 bytes {0} [built]
[2] (webpack)/buildin/global.js 472 bytes {0} [built]
[3] (webpack)/buildin/module.js 497 bytes {0} [built]
    + 1 hidden module

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment. 
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/

```

npx webpack ./src/index.js -o ./dist/xx.js

webpack配置文件
webpack.config.js

npx webpack
如果目录下面存在 webpack.config.js 文件  就把这个文件当成默认的配置文件
# 指定不同的配置文件
npx webpack --config webpack.config.js
npx webpack --config webpack.config.dev.js


mode
webpack --mode=production
```js
module.exports = {
+   mode: 'development',
    entry: "./src/index.js",
    output: {
        filename: "bundleDev.js",
        path: path.resolve(__dirname, "dist")
    }
};
```


```js
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
```


NPM script
CLI 运行本地的 webpack 的 快捷方式。
package.json

npm run test


"build": "npx webpack --config webpack.config.js"
npm run build

"dev": "npx webpack --config webpack.config.dev.js"
npm run dev



