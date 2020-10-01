多入口多出口 文件分割 vue懒加载
```
entry: {
    main: "./demo1/src/index.js",
    calc: "./demo1/src/calc.js"
},

output: {
    filename: '[name].js',
    path: path.resolve(__dirname, "demo1/dist")
}
```

loader
通过 loader 引入任何其他类型的文件

加载css
安装loader
npm install --save-dev style-loader css-loader
配置loader
```
module: {
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }
    ]
}
```
加载图片
npm install --save-dev file-loader

压缩图片
<!-- https://github.com/tcoopman/image-webpack-loader -->
npm install image-webpack-loader --save-dev

小图片转化为base64
url-loader
npm install --save-dev url-loader

处理less
npm install --save-dev less-loader less