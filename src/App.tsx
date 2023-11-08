import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import Frontpage from './pages/frontpage/Frontpage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Frontpage />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
