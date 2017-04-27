const path=require('path');

const cfg={
  entry: './app/index.js',
  output:{
    path: path.resolve(__dirnameo, 'dist'),
    filename: 'index.bundle.js'
  }
};

module.exports=cfg;