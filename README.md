# Google Tag Manager for Gridsome

See [Vue Google Tag Manager](https://www.npmjs.com/package/vue-gtm) for other options.

## Install

- `npm install gridsome-plugin-gtm --save`
- `yarn add gridsome-plugin-gtm`

## Usage

```
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-gtm',
      options: {
        id: 'GTM-XXXXXXX',
        enabled: true,
        debug: true
      }
    }
  ]
}
```
