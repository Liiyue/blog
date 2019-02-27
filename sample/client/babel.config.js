module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['transform-imports', {
      '@kaola/mobile-ui': {
        transform: '@kaola/mobile-ui/lib/components/${member}',
        preventFullImport: true
      },
    }],
  ]

}
