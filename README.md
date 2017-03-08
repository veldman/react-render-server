# React Render Server

React Render server used by Django to render JSX files server side. Works with Redux.

### Installation

To get started with React Render server you can simply install it with npm:

```bash
npm install --save react-render-server
```

### Usage

Run the script in `bin` or start with `node render-server`.

Pass a JSON encoded object to serializedProps on the body. If the props
contain `storePath` it will try and import that path as the store.
This requires components that you want to render to have the "store" prop.

#### Help

For all commands enter the help flag:
```bash
node render-server --help
```

### Further info

See [React Render](https://github.com/markfinger/react-render) and [Python React](https://github.com/markfinger/python-react).
