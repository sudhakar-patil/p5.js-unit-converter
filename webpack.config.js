 const path = require('path');

 module.exports = {
    mode: 'development',
    entry:'./src/index.ts',
    module:{
        rules:[
            {
                test: /\.ts$/,
                use:'ts-loader',
                include:[path.resolve(__dirname,'src')]
            }
        ]
    },    
    devtool:false,
    resolve:{
        extensions: ['.ts','.js']
    },
    output:{
        publicPath: 'public',
        filename:'bundle.js',
        path:path.resolve(__dirname,'public')
    },
    devServer:{
        static:{
            directory:path.resolve(__dirname,'public')
        }
    }
 }