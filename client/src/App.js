import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login';
import Dashbord from './Dashbord';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return  code ? <Dashbord code={code} /> : <Login />  
}

export default App;
