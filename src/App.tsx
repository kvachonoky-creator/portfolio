import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {Particle} from "./components/particles/Particles.tsx";


function App() {
    return (
        <div className="App">
            <Particle />
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default App
