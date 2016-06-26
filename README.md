# React Redux Counter
Simple counter made with React and Redux.

## Setup

Run ```npm install``` from the project's root.

## Run

Run ```npm start``` from the project's root. Then visit ```http://localhost:3000/``` with your browser.

## Redux

### Actions

There are only two actions: ```INCREASE``` and ```DECREASE```. Each action is a simple JSON object:

```js
{
  "type": "INCREASE"
}
```

### Reducer

The reducer is reponsible for the update of the store according to the action that has been received. For this app, the store 
only contains the current value of the counter. The reducer also handles the default state by setting the current value to 0.

```js
export default counter = (previousState = 0, action) => {
  switch (action.type) {
    case 'INCREASE': return previousState + 1
    case 'DECREASE': return previousState - 1
    default: return previousState
  }
}
```

## React

### Component

The React component is a simple ```<div>``` that contains the current value of the counter and two buttons. The Counter extends 
React's ```Component```. All the element are incapsulated inside a ```<div>``` because React requires a single root element. The 
component accepts the current value of the counter and the two listeners to be binded to the buttons.

```js
render() {
  const { currentValue, onIncrement, onDecrement } = this.props
  return (
    <div>
      <button onClick={onIncrement}>INCREASE</button>
      <p> {currentValue} </p>
      <button onClick={onDecrement}>DECREASE</button>
    </div>
  )
}
```

## index.js

This file puts the pieces together. The first section imports React, Redux, and the required project's files:

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Counter from './src/main/js/components/counter'
import counter from './src/main/js/reducers/index'
```

After that the store is initiaized with the reducer:

```js
const store = createStore(counter)
```

The next session initialize the React component:

```js
function render() {
  ReactDOM.render(
    <Counter
      currentValue={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREASE' })}
      onDecrement={() => store.dispatch({ type: 'DECREASE' })}
    />,
    placeholder
  )
}
```

Finally, the store subscribes to the render function:

```js
render()
store.subscribe(render)
```
