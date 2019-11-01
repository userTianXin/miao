module.export = {
    devServe :{
        proxy : {
            '/api':{
                target:'http://39.97.33.178',
                changeOrigin : true
            }
        }
    }
}
// proxyTable = {
//     '/api': {
//       // 跨域域名
//       target: 'http://39.97.33.178',
//       // 是否跨域
//       changeOrigin: true,
//       pathRewrite: {
//         '^/api': ''
//       }
//     }
//   }