import path from 'path';
import url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export default {
  mode: 'development',
  target: 'web',
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/'
  },
  devtool: false,
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      "src": path.resolve(__dirname, 'src')
    }
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ 
      inject: true,
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new webpack.ProgressPlugin()
  ],
}