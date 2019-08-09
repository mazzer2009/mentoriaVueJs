module.exports = {
  devServer: {
    overlay: true,
    proxy: {
      '^/api': {
        target: 'http://5d4cc67c04ba7100147033b0.mockapi.io/heroapi/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
