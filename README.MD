# 一个自动为await添加catch的loader

### Usage
```js
//webpack.config.js

module.exports = {
  //...
    module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/, //刨除哪个文件里的js文件
        include: path.resolve(__dirname, "./src"),
        use: [
          {loader: "babel-loader"},
          {
            loader: 'await-add-catch-loader',
            options: {
              needReturn: true,
              consoleError: true,
              customizeCatchCode: "//please input you want to do",
            },
          },
        ],
      },
    ],
  },
}

//  needReturn: true,
const fn = async() => {
  const { data } = await po()
}
//build
const fn = async() => {
  const { data } = await po().catch(err=>{ return {} });
}

// consoleError: true,
const fn = async() => {
  const { data } = await po()
}
//build
const fn = async() => {
  const { data } = await po().catch(err=>{ console.log(err) });
}

// customizeCatchCode: "please input you want to do;",
const fn = async() => {
  const { data } = await po()
}
//build
const fn = async() => {
  const { data } = await po().catch(err=>{ please input you want to do });
}
```