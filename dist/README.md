# fp-html
Write HTML in Javascript with ease by leveraging function composition and currying.

**fp-html** can be used instead of templates, JSX or string concatenation to create HTML strings in a more functional way. It provides a set of functions to create HTML elements and attributes that's more readable and maintainable.

This means no need to learn a template language or a new syntax, just use plain Javascript functions. With the extra help of Typescript and modern editor tools you also get the advantage of type checking, autocompletion and error correction inside your templates.

The syntax is inspired by [Elm](https://elm-lang.org/) and [purescript-react](https://github.com/purescript-contrib/purescript-react).
## Installation
```bash
npm install fp-html
```

## Usage
All **fp-html** functions just return strings, so no need to call another function to render the HTML.
```javascript
import { Div, H1, P } from 'fp-html'

const html = Div()(
  H1()('Hello World'),
  P()('This is a paragraph')
)

// html -> <div><h1>Hello World</h1><p>This is a paragraph</p></div>
```
### Iterate over arrays
```javascript
import { Ul, Li } from 'fp-html'

const items = ['Apple', 'Banana', 'Cherry']

const html = Ul()(
  items.map(item => Li()(item))
)

// html -> <ul><li>Apple</li><li>Banana</li><li>Cherry</li></ul>
```

### Set properties
```javascript
import { Div } from 'fp-html'

const html = Div({ id: 'container', class: 'container' })('Hello World')

// html -> <div id="container" class="container">Hello World</div>
```

### Create reusable elements
```javascript
import { Div } from 'fp-html'

const Container = Div({ style: 'background-color: #f0f0f0; padding: 2px' })
const html = Html()([
  Container('Hello World'),
  Hr()(),
  Container('This is a paragraph')
])
```

### Create custom elements
```javascript
import { Element } from 'fp-html'

const CustomElement = Element('custom-element')
const html = CustomElement()('Hello World')

// html -> <custom-element>Hello World</custom-element>
```

## Contributing
I want to keep this library as minimal as possible but if you have any ideas or suggestions feel free to open an issue or a pull request.

