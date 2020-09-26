const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  presets: [path.resolve(__dirname, './next-preset.js')],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
}
