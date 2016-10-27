# Xecle - rethinking spreadsheet

Xecle is about rethinking how spreadsheet works.


## Development

### Setup

1. Install *nodejs*
2. Install *leiningen*
3. `npm install -g grunt-cli electron`
4. `lein deps`
5. `lein descjop-externs`

### Development mode

1. `lein descjop-figwheel`
2. `electron app/dev --enable-logging`


### Production mode

1. `electron app/prod`


## Architecture

- [**Electron**](https://github.com/electron/electron) for GUI layer.
- [**ClojureScript**](http://cljs.info/cheatsheet/) for Javascript.
- [**Descjop**](https://github.com/karad/lein_template_descjop)
  to glue ClojureScript with Electron.
