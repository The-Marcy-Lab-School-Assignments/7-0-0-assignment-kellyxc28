// useState is imported at the top
import { useState } from 'react';

// component names use PascalCase
const CounterDisplay = ({ count }) => {
  return <p>{count}</p>
}

const CounterButtons = ({ increment, decrement }) => {
  // props are destructured ^          ^
  
  // multiple returned components are wrapped with () and <> </>
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

// App is exported (default or named is fine)
const App = () => {
  // state is "lifted up" and passed down with props
  const [count, setCount] = useState(0);

  // helper functions can be passed down instead of the setter function itself
  const increment = () => { setCount(count + 1) }
  const decrement = () => { setCount(count - 1) }

  return (
    <>
      <CounterDisplay count={count} />
      <CounterButtons increment={increment} decrement={decrement} />
    </>
  )
}

export default App;