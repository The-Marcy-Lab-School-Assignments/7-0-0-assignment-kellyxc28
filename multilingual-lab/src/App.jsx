// useState is imported at the top
// the following line is for checking 
// import { useEffect, useState } from 'react';
import {useState } from 'react';

// component names use PascalCase
const WelcomeDisplay = ({ fontSize, welcomePhrase }) => {
  // useEffect(()=> {
  //   console.log(fontSize)
  // }, [])
  return (
    <>
      <p style={{fontSize: `${fontSize}px`}}> {welcomePhrase}</p>
    </>
  )
}

const FontSizeButtons = ({ increment, decrement }) => {
  // props are destructured ^          ^
  
  // multiple returned components are wrapped with () and <> </>
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

const LanguageButtons = ({ english, chinese, spanish, haitian, portuguese }) => {
  // props are destructured ^          ^
  
  // multiple returned components are wrapped with () and <> </>
  return (
    <>
      <button onClick={english}>English</button>
      <button onClick={chinese}>Chinese</button>
      <button onClick={spanish}>Spanish</button>
      <button onClick={haitian}>Haitian</button>
      <button onClick={portuguese}>Portuguese</button>
    </>
  )
}

// App is exported (default or named is fine)
const App = () => {
  // state is "lifted up" and passed down with props
  const [fontSize, setFontSize] = useState(20);
  const [welcomePhrase, setLang] = useState('Welcome!');
  
  // helper functions can be passed down instead of the setter function itself
  const increment = () => { setFontSize(fontSize + 1) }
  const decrement = () => { setFontSize(fontSize - 1) }

  // helper functions can be passed down instead of the setter function itself
  const english = () => { setLang('Welcome!') }
  const chinese = () => { setLang('欢迎!') }
  const spanish = () => { setLang('Bienvenida!') }
  const haitian = () => { setLang('Benvenuta!') }
  const portuguese = () => { setLang('Bem-vindo!') }

  return (
    <>
      <WelcomeDisplay fontSize={fontSize} welcomePhrase={welcomePhrase} />
      <FontSizeButtons increment={increment} decrement={decrement} />
      <LanguageButtons english={english} chinese={chinese} spanish={spanish} haitian={haitian} portuguese={portuguese} />
    </>
  )
}

export default App;