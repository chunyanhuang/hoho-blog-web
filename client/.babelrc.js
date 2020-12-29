module.exports = {
  plugins: [
    [
      "import",
      {
        libraryName: "antd",
        // style: "css"
      }
    ],
    [
      "import",
      {
        libraryName: "@ant-design",
        libraryDirectory: "icons"
      }
    ],
    "@babel/plugin-transform-modules-commonjs"
  ]
}
