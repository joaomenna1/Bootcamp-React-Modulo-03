const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/, 
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      }, {
        test: /.*\.(gif|png|jpe?g)$/i,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  }

};

/**
 * ==> output uma chave que é obrigatoria, 
 *  vai jogar(bundle) o codigo compilado pelo webpack, o codigo que o javascript
 *  entende, nesse caso vamos criar um diretorio 'public' para armazenar esse
 * bundle.
 * ==>entry localiza onde ta o projeto 
 * ==>Criar uma configuração chamada module
 * no module vamos determinar algumas regras e vamos passar um objeto test com
 * uma expressao regular /\ .js$/ , a primeira barra determina um ponto, pois o 
 * ponto geralmente é qualquer caracter, o nosso sinal de $ significa que tem q 
 * terminar com .js
 * ==> Na linha 27 o i no final é case insensitive (M e m)
 */