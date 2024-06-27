import logo from './logo.svg';
import './App.css';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import GreetingStyled from './components/pure/greetingStyled';
// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio Greeting.jsx */}
        {/* <Greeting name='Juan'></Greeting> */}
        {/* Componente de ejemplo funcional */}
        {/* <GreetingF name = "Juan"></GreetingF> */}
        {/* componente de Listado de tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre='Juan'> */}
          {/* todo lo que hay adentro es tratado como props.children */}
          {/* <h3>
            Contenido del props.children 
          </h3> */}
        {/* </Ejemplo4> */}
        <GreetingStyled name="Juan"></GreetingStyled>
      </header>
    </div>
  );
}

export default App;
