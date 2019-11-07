const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = ({ config }) => {
  config.module.rules = [];

  config.module.rules.push({
    test: /\.(eot|otf|ttf|woff|woff2)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          context: '/',
          name: 'fonts/[name].[ext]'
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
        options: {
          context: '/',
          name: 'images/[name].[ext]'
        }
      }
    ]
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      { loader: "style-loader" },
      { loader: "css-loader" },
      { loader: "sass-loader" }
    ]
  });

  config.module.rules.push({
    test: /\.jsx?$/,
    exclude: /node_modules[/\\](?!react-native-paper|react-native-vector-icons|react-native-safe-area-view)/,
    use: {
      loader: 'babel-loader',
      options: {
        // Disable reading babel configuration
        babelrc: false,
        configFile: false,

        // The configration for compilation
        presets: ['@babel/preset-react', '@babel/preset-flow'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-object-rest-spread'
        ]
      }
    }
  });

  config.module.rules.push({
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require("@babel/preset-typescript").default,
            require("@babel/preset-react").default
          ]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  });

  config.module.rules.push({
    test: /\.story.(ts|js)x?$/,
    exclude: [/node_modules/],
    loaders: [
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  });

  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx', '.mdx');

  config.resolve.alias = {
    'react-native': require.resolve('react-native-web'),
    '@storybook/react-native': require.resolve('@storybook/react'),
  };

  config.module.rules.push({
    test: /\.mdx$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            require("@babel/preset-typescript").default,
            require("@babel/preset-react").default
          ],
          plugins: ['@babel/plugin-transform-react-jsx']
        }
      },
      {
        loader: '@mdx-js/loader',
        options: {
          compilers: [createCompiler({})]
        }
      }
    ]
  });

  config.resolve.plugins = [new TsconfigPathsPlugin()];

  return config;
};
