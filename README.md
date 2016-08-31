# Angular application for quick start

### Requirement

- node.js
- grunt
- bower

## Installation

```bash
$ git clone git@github.com:athlonUA/quickStartAngularApplication.git
```

```bash
$ cp project/app/js/config.js.dist project/app/js/config.js
```

## Building

In production mode:
```bash
$ cd project
$ ./prod.sh
```

In dev mode:
```bash
$ cd project
$ ./dev.sh
```

Go to http://localhost:8080 to see the application

## Tests

To run tests:
```bash
$ cd project
$ ./test.sh
$ webdriver-manager update
$ protractor test/protractor-conf.js
```
