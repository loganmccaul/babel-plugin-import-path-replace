# babel-plugin-import-path-replace

Transforms import statements with a simple string replacement. This can come
in handy when your output files are in a different folder structure and the path
to imported files needs to be updated.


## Install

NPM: `npm install --save-dev babel-plugin-import-path-replace`

Yarn: `yarn add -D babel-plugin-import-path-replace`

## Usage

Add the following to your .babelrc
```
{
  "plugins": [
    [
      "import-path-replace",
      {
        "rules": [
          {
            "match": "String to be replaced",
            "replacement": "Replacement string"
          }
        ]
      }
    ]
  ]
}
```

### Example

#### Plugin

```
{
  "plugins": [
    [
      "import-path-replace",
      {
        "rules": [
          {
            "match": "../",
            "replacement": "../../"
          }
        ]
      }
    ]
  ]
}
```

#### Input

```
import example from '../example';
```

#### Output

```
import example from '../../example';
```
