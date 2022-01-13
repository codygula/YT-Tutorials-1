import Todo from './components/Todo';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="lean react" />
      <Todo text="master react"/>
      <Todo text="master react again"/>
    </div>
  );
}

export default App;
