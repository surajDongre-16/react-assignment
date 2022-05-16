import './App.css';
import Logo from './components/Logo';
import Links from './components/Links';
import Btn from './components/Button';

function App() {

  let middle=[
    {link: "Services" },
    {link: "Projects"},
    {link: "About"}
  ]

  return (
     <div className='App'>
       <div id='logo'>
        <Logo/>
       </div>
       <div>
         <a href='#' id='middle'>
          <Links {...middle[0]}/>
          <Links {...middle[1]}/>
          <Links {...middle[2]}/>
         </a>
       </div>
       <div id='right'>
        <Btn/>
       </div>
     </div>
  )
  
}

export default App;
