import TaskForm from './components/TaskForm';
import Header from './components/Header';
import './styles/App.css'
import Task from './components/Task';
import TaskList from './components/TaskList';

//ruteo

function App() {
  return (
    <div className="appContainer">
        <Header />
        <TaskForm/>
        <TaskList/>
    </div>
  );
}

export default App;
