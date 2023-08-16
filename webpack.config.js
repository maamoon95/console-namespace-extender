const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/index.ts', // The main entry point of your library
  mode: 'production', // For minified build. Use 'development' for debugging.
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // ... your TerserPlugin configuration options go here

          // Example options:
          compress: {
            drop_console: false // Setting this to true will remove console.logs from your code
          },
          output: {
            comments: false // Remove comments
          }
        }
      })
    ]
  },
  output: {
    filename: 'console-namespace-extend.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ConsoleNamespaceExtend',
    libraryTarget: 'var'
  },
  resolve: {
    extensions: ['.ts', '.js'] // Resolve these extensions
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply the loader for all .ts files
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader' ,
          //   options: {
          //   configFile: path.resolve(__dirname, 'tsconfig.json'),
          //   compiler: path.resolve(__dirname, 'node_modules/typescript')
          // }
        }
      }
    ]
  }
};
