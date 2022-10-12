module.exports = {
  entry: '/script.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '/dist/bundle.js',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ]     
        }
       ]
    }
  }
  };