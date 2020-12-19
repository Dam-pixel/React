import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <Technologies/>
    </div>
  );
}

const Header = () => {
  return (<div>
    <a href='#s'>Home</a>
    <a href='#s'>Messages</a>
    <a href='#s'>News Feed</a>
  </div>
  );
}


const Technologies = () => {
  return (
    <div>
    <ul>
      <li>
        CSS
    </li>
      <li>
        HTML
    </li>
      <li>
        REACT
    </li>
    </ul>
  </div>

  );
}

export default App;