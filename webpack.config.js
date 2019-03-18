module.exports = env => {
  const libraryName = 'monument-ui';

  let outputFile, mode, devtool;

  if (env === 'build') {
    mode = 'production';
    outputFile = `${libraryName}.min.js`;
    devtool = false;
  } else {
    mode = 'development';
    outputFile = `${libraryName}.js`;
    devtool = 'source-map';
  }

  return {
    mode,
    entry: `${__dirname}/src/index.tsx`,
    externals: ['color', 'react', 'react-dom', 'styled-components', 'to-px'],
    devtool,
    output: {
      path: `${__dirname}/lib`,
      filename: outputFile,
      library: 'MonumentUI',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      globalObject: 'global'
    },
    module: {
      rules: [
        {
          test: /\.tsx$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          resolve: {
            extensions: ['.tsx']
          }
        }
      ]
    }
  };
};
