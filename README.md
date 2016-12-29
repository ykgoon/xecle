# Xecle - rethinking spreadsheet

Xecle is about rethinking how spreadsheet works.


## Development

### Setup

1. Install *nodejs*
2. Install *leiningen*
3. Install *nodeenv* (optional)
4. Run `npm install -g electron`
5. Run `lein deps`
6. Run `lein descjop-externs`

### Development mode

1. `lein descjop-figwheel` to compile Javascript files
2. `electron app/dev` to launch desktop application
  1. *Before that* if you use `nodeenv`, run this first:
  `. env/bin/active`

### Production mode

1. `electron app/prod`


## Architecture

- [**Electron**](https://github.com/electron/electron) for GUI layer.
- [**ClojureScript**](http://cljs.info/cheatsheet/) for Javascript.
- [**Descjop**](https://github.com/karad/lein_template_descjop)
  to glue ClojureScript with Electron.
