import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

function App() {
  return (
    <>
      <ReactNotification />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;