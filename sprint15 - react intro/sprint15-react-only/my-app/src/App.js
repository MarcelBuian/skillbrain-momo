import logo from './logo.svg';
import './App.css';
import Profile from './Profile';
import MyProfile from './MyProfile';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>Hello, SkillBrain</div>
        <Profile name="Profile1"></Profile>
        <Profile name="SkillBrain" />
        <Profile></Profile>
        <MyProfile>
          <div>
            <div>
              Salut, sunt div!
            </div>
          </div>
        </MyProfile>


        <TodoList></TodoList>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
