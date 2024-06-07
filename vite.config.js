export default {
  build: {
    minify: 'terser',
    terserOptions: {
      mangle: {
        properties: {
          nth_identifier: {
            get: n => {
              return 'prefix_'+n.toString()
            }
          }
        }
      }
    }
  }
}