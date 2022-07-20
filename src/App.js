import './App.css';
import Cards from './Components/Cards';
import Header from './Components/Header';
import Navegation from './Components/Navegation';
import useRicky from './Hooks/useRicky';

function App() {

    // COMPONENT STATES
    const { name,  id, image} = useRicky();
    const { nameTwo,  idTwo, imageTwo} = useRicky();
    const { nameThree,  idThree, imageThree} = useRicky();
    const { created, createdTwo, createdThree } = useRicky();

  return (

    <div className="App">
        <Navegation />
        <Header />
        <div className="md:flex">
            <Cards name={ name } id={ id } imagen={ image } created={ created }/>
            <Cards name={ nameTwo } id={ idTwo } imagen={ imageTwo } created= { createdTwo }/>
            <Cards name={ nameThree } id={ idThree } imagen={ imageThree } created={ createdThree }/>
        </div>
    </div> 

  );
}

export default App;
