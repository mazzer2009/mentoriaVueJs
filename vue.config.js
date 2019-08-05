module.exports = {
  devServer: {
    overlay: true,
    proxy: {
      '^/api': {
        target: 'http://5d13c55776f3f5001415f3c2.mockapi.io/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
