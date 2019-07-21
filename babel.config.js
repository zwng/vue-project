module.exports = {
  presets: [
    '@vue/app'
  ],
  "ignore": [
    "./src/assets/lib/dist/js/mui.js"
  ],
  plugins: [
    "babel-plugin-transform-remove-strict-mode"
  ]
  
}
