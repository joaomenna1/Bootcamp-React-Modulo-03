module.exports = {
  presets: [ 
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};

/**
 * preset-env responsavel por alterar as propriedades do javascript
 * que o navegador nao entende, como... import export, arrow functions classes
 * e o preset-react transformar as coisas q o navegador nao entender do react
 * 
 */