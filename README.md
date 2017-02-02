# Xecle - rethinking spreadsheet

Xecle is about rethinking how spreadsheet works.


## Development

### Setup

1. Install [*leiningen*](https://leiningen.org/#install)
2. `pip install nodeenv`
3. `. env/bin/active`
4. `npm install electron -g --save-dev`
5. `lein deps`
6. `lein descjop-externs`


### Development mode

1. `. env/bin/active`
2. `lein descjop-figwheel` to bring up app window running compiled Javascript


### Production mode

1. `electron app/prod`


## Architecture

- [**Electron**](https://github.com/electron/electron) for GUI layer.
- [**ClojureScript**](http://cljs.info/cheatsheet/) for Javascript.
- [**Descjop**](https://github.com/karad/lein_template_descjop)
  to glue ClojureScript with Electron.
