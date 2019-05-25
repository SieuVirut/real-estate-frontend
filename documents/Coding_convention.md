# CODING CONVENTION 

[TOC]



### 1. Naming:

#### **Extensions**

Use `.jsx` extension for React components.

#### **Filename, Class**

 Use PascalCase  E.g., `ReservationCard.jsx, ReservationCard`.

#### **Reference Naming**

##### File name

Use PascalCase for React components and camelCase for their instances. camelCase as``readCard``

```jsx
// bad
import reservationCard from './ReservationCard';

// good
import ReservationCard from './ReservationCard';

// bad
const ReservationItem = <ReservationCard />;

// good
const reservationItem = <ReservationCard />;
```
 

##### **Props name**

Always use camelCase for prop names.

```jsx
// bad
<Foo
  UserName="hello"
  phone_number={12345678}
/>

// good
<Foo
  userName="hello"
  phoneNumber={12345678}
/>
```
##### Value

​  Boolean variables, or functions that return a boolean value, should start with “is,” “has” or “should.”

```jsx
// Bad
const done = current >= goal;

//good & clean
const isComplete = current >= goal;
```



##### Function

Functions should be named for what they do, not how they do it.

```jsx
// Bad
const loadConfigFromServer = () => {
  ...
};
    
 // Good &  Clean
const loadConfig = () => {
  ...
};

```
##### Scss + Css classname

With common class name: `menu-top`, `menu-top-left`, .... 

With Scss + Css class of this project: `res-menu-top-right` , `res-menu-top-left`, `res-menu-top-right-text`, `res-menu-top-right-img` ...   

### 2. Other:  

####  Class: 

If you have internal state and/or refs:

```javascript
// bad
const Listing = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
});

// bad
class Listing extends React.Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}

// good
const abc = ...
class Listing extends Component {
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
}

```

And if you don't have state or refs, prefer normal functions (not arrow functions) over classes:

  ```jsx

// bad
class Listing extends Component {
  render() {
    return <div>{this.props.hello}</div>;
  }
}

// bad (relying on function name inference is discouraged)
const Listing = ({ hello }) => (
  <div>{hello}</div>
);

// good
function Listing({ hello }) {
  return <div>{hello}</div>;
}

  ```



#### Method: 

-   Naming: camelCase with type as: `doSomethingWith()`


- Use arrow functions to close over local variables.

```jsx
function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, index) => (
        <Item
          key={item.key}
          onClick={() => doSomethingWith(item.name, index)}
        />
      ))}
    </ul>
  );
```

- Bind event handlers for the render method in the constructor

```jsx
// bad
class extends React.Component {
  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv.bind(this)} />;
  }
}

// good
class extends React.Component {
  constructor(props) {
    super(props);

    this.onClickDiv = this.onClickDiv.bind(this);
  }

  onClickDiv() {
    // do stuff
  }

  render() {
    return <div onClick={this.onClickDiv} />;
  }
}
```



- Be sure to return a value in your `render` methods

```jsx
// bad
render() {
  (<div />);
}

// good
render() {
  return (<div />);
}
```





Comment: 



#### Alignment:



Follow these alignment styles for JSX syntax:

```jsx
// bad
<Foo superLongParam="bar"
     anotherSuperLongParam="baz" />

// good
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
/>

// if props fit in one line then keep it on the same line
<Foo bar="bar" />

// children get indented normally
<Foo
  superLongParam="bar"
  anotherSuperLongParam="baz"
>
  <Quux />
</Foo>

// bad
{showButton &&
  <Button />
}

// bad
{
  showButton &&
    <Button />
}

// good
{showButton && (
  <Button />
)}

// good
{showButton && <Button />}
```






#### Spacing 

Always include a single space in your self-closing tag:

```jsx
// bad
<Foo/>

// very bad
<Foo                 />

// bad
<Foo
 />

// good
<Foo />
```

Do not pad JSX curly braces with spaces:



```jsx
// bad
<Foo bar={ baz } />

// good
<Foo bar={baz} />
```



#### Tab size

Using `space, tab size: 2`, not use default settings is 4 or 8 as a fews IDE. 

#### Tags

Always self-close tags that have no children:

```jsx
// bad
<Foo variant="stuff"></Foo>

// good
<Foo variant="stuff" />
```

If your component has multi-line properties, close its tag on a new line:

```jsx
// bad
<Foo
  bar="bar"
  baz="baz" />

// good
<Foo
  bar="bar"
  baz="baz"
/>
```



#### Quotes:

Always use double quotes (`"`) for JSX attributes, but single quotes (`'`) for all other JS

```jsx
// bad
<Foo bar='bar' />

// good
<Foo bar="bar" />

// bad
<Foo style={{ left: "20px" }} />

// good
<Foo style={{ left: '20px' }} />
```



#### Ordering in one class: 

- Ordering for `class extends React.Component`:

  1. optional `static` methods
  2. `constructor`
  3. `getChildContext`
  4. `componentWillMount`
  5. `componentDidMount`
  6. `componentWillReceiveProps`
  7. `shouldComponentUpdate`
  8. `componentWillUpdate`
  9. `componentDidUpdate`
  10. `componentWillUnmount`
  11. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
  12. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
  13. *optional render methods* like `renderNavigation()` or `renderProfilePicture()`
  14. `render`

- How to define `propTypes`, `defaultProps`, `contextTypes`, etc...

  ```jsx
  import React from 'react';
  import PropTypes from 'prop-types';
  
  const propTypes = {
    id: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
    text: PropTypes.string,
  };
  
  const defaultProps = {
    text: 'Hello World',
  };
  
  class Link extends React.Component {
    static methodsAreOk() {
      return true;
    }
  
    render() {
      return <a href={this.props.url} data-id={this.props.id}>{this.props.text}</a>;
    }
  }
  
  Link.propTypes = propTypes;
  Link.defaultProps = defaultProps;
  
  export default Link;
  ```

- Ordering for `React.createClass`: eslint: [`react/sort-comp`](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)

  1. `displayName`
  2. `propTypes`
  3. `contextTypes`
  4. `childContextTypes`
  5. `mixins`
  6. `statics`
  7. `defaultProps`
  8. `getDefaultProps`
  9. `getInitialState`
  10. `getChildContext`
  11. `componentWillMount`
  12. `componentDidMount`
  13. `componentWillReceiveProps`
  14. `shouldComponentUpdate`
  15. `componentWillUpdate`
  16. `componentDidUpdate`
  17. `componentWillUnmount`
  18. *clickHandlers or eventHandlers* like `onClickSubmit()` or `onChangeDescription()`
  19. *getter methods for `render`* like `getSelectReason()` or `getFooterContent()`
  20. *optional render methods* like `renderNavigation()` or `renderProfilePicture()`
  21. `render`



### 3.Clean :

```jsx
// Dirty
const MyComponent = () => (
  <div>
    <OtherComponent type="a" className="colorful" foo={123} bar={456} />
    <OtherComponent type="b" className="colorful" foo={123} bar={456} />    
  </div>
);


// Clean
const MyOtherComponent = ({ type }) => (
  <OtherComponent type={type} className="colorful" foo={123} bar={456} />
);
const MyComponent = () => (
  <div>
    <MyOtherComponent type="a" />
    <MyOtherComponent type="b" />
  </div>
);

```



Clean code is self-commenting

```jsx
// Dirty
const fetchUser = (id) => (
  fetch(buildUri`/users/${id}`) // Get User DTO record from REST API
    .then(convertFormat) // Convert to snakeCase
    .then(validateUser) // Make sure the the user is valid
);


// Clean
const fetchUser = (id) => (
  fetch(buildUri`/users/${id}`)
    .then(snakeToCamelCase)
    .then(validateUser)
);
```



#### Using Async functions

Should use Async functions, shouldn't use Promise or callback functions. 

```jsx
// shouldn't
static getInitialProps(props) {
    // get param
    const q = withRouter(props).query.q || ''
    // fetch data
    const data = fetch(`http://35.162.19.55/api/v1/projects?page=${q}`)
    	.then(res => res.json())
   		.then(json => json['data'])
    return { data: data }
  }

// should
static async getInitialProps(props) {
    // get param
    const q = withRouter(props).query.q || ''
    // fetch data
    const res = await fetch(`http://35.162.19.55/api/v1/projects?page=${q}`)
    const json = await res.json()
    const data = json['data']
    return { data: data }
  }
```



#### Using Arrow function

With a function on your class, if it isn't default function as `componentWillMount()`, `componentDidMount()` ... , should use arrow functions, 

```jsx
// should 
const getUserName = () => {
    // do somethings
    return name
}
```



#### Using export default component

With a simple component, don't connect `redux, store` using `export default` on header, but with long component using `export default` or  `export connect` on footer.

```jsx
// short or simple component
export default MenuSearch = (
  <div />
)

// long or hard component 
import React, { Component } from 'react'
....
import MenuSearch from '../components/form/menu-search'
class Search extends Component {

  static async getInitialProps(props) {
   ...
    return { data: data }
  }
	// action ... 
  render() {
	// do something
    return (
      <Layout>
       ....
      </Layout>
    )
  }
}
export default Search

```



#### Using semicolon

- Shouldn't use semicolon. 

  

#### Value default

Should have value default,

```jsx
const q = withRouter(props).query.q || ''
or
return { q || '' }
```



#### Create function

- When create a funtion, that funtion will done 1 action, has or hasn't params but return only result, no more. 
- Maximum length of function is no longer than 30 lines, if it is longer, can create many functions.
- No create a function that hasn't action, only return something.



#### Create component 

- When can reuse, should create new component.
- When function, action is longer or hard, should create new component.
- When component was used more, create common component. 

 

