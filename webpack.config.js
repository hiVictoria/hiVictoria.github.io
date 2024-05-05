const path = require('path');
const glob = require('glob');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, "src"),
  };

  const additionalPaths = [
    ...glob.sync(path.join(__dirname, '81ad899a7cdefd3795356650d2490bc311a26faf/**/*.html'), { nodir: true }),
    ...glob.sync(path.join(__dirname, '81ad899a7cdefd3795356650d2490bc311a26faf/scripts/**/*.js'), { nodir: true }),
    ...glob.sync(path.join(__dirname, '81ad899a7cdefd3795356650d2490bc311a26faf/css/**/*.css'), { nodir: true }),
];

// console.log("HTML Files:", glob.sync(path.join(__dirname, '*.html'), { nodir: true }));
// console.log("JavaScript Files:", glob.sync(path.join(__dirname, 'scripts/**/*.js'), { nodir: true }));
// console.log("CSS Files:", glob.sync(path.join(__dirname, 'css/**/*.css'), { nodir: true }));
// console.log("addition Files:", additionalPaths);

module.exports = {
  mode: "production",
  entry: './css/bootstrap.css', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output file name
  },
  module: {
    rules: [
      // Your CSS rules
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
            'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
    new PurgeCSSPlugin({
        paths: [
            ...glob.sync(path.join(__dirname, '*.html'), { nodir: true }),
            ...glob.sync(path.join(__dirname, 'scripts/**/*.js'), { nodir: true }),
            ...glob.sync(path.join(__dirname, 'css/**/*.css'), { nodir: true }),
            ...additionalPaths
          ],
    }),
    
  ],
  optimization: {
    minimize: true, // Minimize JavaScript
  },
};
