import './App.css';
import { createBrowserHistory } from 'history'
import {BrowserRouter as Router,Switch } from 'react-router-dom'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Admin from './pages/Admin/Admin'
import FilmHot from './pages/FilmHot/FilmHot'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
export const history = createBrowserHistory();
function App() {
  return (
    <div className="App">
  <Router history={history}>
    <Switch>
     <HomeTemplate path="/" exact Component={Home}/>
     <HomeTemplate path="/home" exact Component={Home}/>
     <HomeTemplate path="/contact" exact Component={Contact}/>
     <HomeTemplate path="/admin" exact Component={Admin}/>
     <HomeTemplate path="/filmhot" exact Component={FilmHot}/>
     <HomeTemplate path="/login" exact Component={Login}/>
     <HomeTemplate path="/register" exact Component={Register}/>
    </Switch>
  </Router>
  </div>
  );
}

export default App;


