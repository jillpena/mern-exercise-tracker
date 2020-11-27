import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar.component';
import ExerciseList from './components/exercises-list.component';
import CreateExerciseForm from './components/create-exercise-form.component';
import ExerciseEdit from './components/exercise-edit.component';
import CreateUserForm from './components/create-user-form.component';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={ExerciseEdit} />
        <Route path="/create" component={CreateExerciseForm} />
        <Route path="/user" component={CreateUserForm} />
      </div>
    </Router>
  );
}

export default App;
