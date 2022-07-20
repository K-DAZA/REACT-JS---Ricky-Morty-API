import "./App.css";
import Cards from "./Components/Cards";
import Header from "./Components/Header";
import Navegation from "./Components/Navegation";
import useRicky from "./Hooks/useRicky";

function App() {
    // COMPONENT STATES
    // ARREGLO DATOS API - Ricky Morty
    const { dataArray } = useRicky();

    return (
        <div className="App">
            <Navegation />
            <Header />
            <div className="md:flex flex-wrap">
                {dataArray.map((items) => (
                    <Cards
                        key={items.id}
                        name={items.name}
                        id={items.id}
                        imagen={items.image}
                        created={items.created}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
