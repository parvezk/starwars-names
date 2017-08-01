// after package publish
// https://npmcdn.com/starwars-names@1.5.3/dist/index.umd.js

import {join} from 'path';

const include = join(__dirname, 'src')

export default {
  entry: './src/index',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'starWarsNames'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {test: /\.js$/, loader: 'babel', include},
      {test: /\.json$/, 'loader': 'json', include},
    ]
  }
}