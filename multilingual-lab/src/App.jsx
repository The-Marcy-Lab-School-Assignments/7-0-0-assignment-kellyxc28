// useState is imported at the top
import { useState } from 'react';

// component names use PascalCase
const WelcomeDisplay = ({ welcomePhrase }) => {
  return <p>{welcomePhrase}</p>
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
  const [welcomePhrase, setLang] = useState('Welcome!');
  
  // helper functions can be passed down instead of the setter function itself
  const english = () => { setLang('Welcome!') }
  const chinese = () => { setLang('欢迎!') }
  const spanish = () => { setLang('Bienvenida!') }
  const haitian = () => { setLang('Benvenuta!') }
  const portuguese = () => { setLang('Bem-vindo!') }

  return (
    <>
      <WelcomeDisplay welcomePhrase={welcomePhrase} />
      <LanguageButtons english={english} chinese={chinese} spanish={spanish} haitian={haitian} portuguese={portuguese} />
    </>
  )
}

export default App;