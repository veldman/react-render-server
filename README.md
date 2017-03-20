# React Render Server [![Build Status](https://travis-ci.org/veldman/react-render-server.svg?branch=master?style=flat-square)](https://travis-ci.org/veldman/react-render-server) [![npm version](https://img.shields.io/npm/v/react-render-server.svg?style=flat-square)](https://www.npmjs.com/package/react-render-server) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md) [![Codecov](https://img.shields.io/codecov/c/github/veldman/react-render-server.svg?style=flat-square)](https://codecov.io/github/veldman/react-render-server)

React Render server used by Django to render JSX files server side. Works with Redux.

### Requirements

Current version of node is 7.5, but should be usable by node >= 5.

### Installation

To get started with React Render server you can simply install it with npm:

```bash
npm install --save react-render-server
```

### Usage

Run the script in `bin` or start with `node render-server` when globally installed.

Pass a JSON encoded object to serializedProps on the body. If the props
contain `storePath` it will try and import that path as the store.
This requires components that you want to render to have the "store" prop.


Send a JSON POST to `/render` on the selected port with the JSON body as followed

```json
{
	"path": "/Your/Absolute/Path/To/The/Component/react.jsx",
	"serializedProps": "{\"test\": \"Hello\"}"
}
```

or with normal props:

```json
{
	"path": "/Your/Absolute/Path/To/The/Component/react.jsx",
	"props": {"test": "Hello"}
}
```


#### Redux example:

POST to `/render`


```json
{
	"path": "/Users/veldman/projects/django-react/render-server/lib/__mock__/react.jsx",
	"serializedProps": "{\"test\": \"Hello\", \"storePath\": \"/Path/To/Store/store.js\"}"
}
```

#### Help

For all commands enter the help flag:
```bash
node render-server --help
```

### Further info

See [React Render](https://github.com/markfinger/react-render) and [Python React](https://github.com/markfinger/python-react).
