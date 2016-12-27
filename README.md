# Xecle - rethinking spreadsheet

Xecle is about rethinking how spreadsheet works.


## Development

### Setup

1. Install *nodejs*
2. Install *nodeenv* (optional)
3. Install *leiningen* (Clojure)
4. `npm install`
5. `lein deps`
6. `lein descjop-externs`

### Development mode

1. `lein descjop-figwheel` to compile Javascript files
2. `electron app/dev` to launch desktop application


### Production mode

1. `electron app/prod`


## Architecture

- [**Electron**](https://github.com/electron/electron) for GUI layer.
- [**ClojureScript**](http://cljs.info/cheatsheet/) for Javascript.
- [**Descjop**](https://github.com/karad/lein_template_descjop)
  to glue ClojureScript with Electron.
