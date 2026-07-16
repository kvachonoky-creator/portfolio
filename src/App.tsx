import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/main/Main.tsx";
import {Footer} from "./layout/footer/Footer.tsx";
import {usePointerGlow} from "./hooks/usePointerGlow.ts";
import {ThemeProvider} from "styled-components";
import {themes} from "./styles/Theme.ts";
import {GlobalStyle} from "./styles/Global.styled.ts";
import {useColorTheme} from "./hooks/useColorTheme.ts";


function App() {
    const {onPointerMove, onPointerLeave} = usePointerGlow();
    const {themeMode, toggleTheme} = useColorTheme();

    return (
        <ThemeProvider theme={themes[themeMode]}>
            <GlobalStyle/>
            <div className="App" onPointerMove={onPointerMove} onPointerLeave={onPointerLeave}>
                <Header themeMode={themeMode} onThemeToggle={toggleTheme}/>
                <Main/>
                <Footer/>
            </div>
        </ThemeProvider>
    )
}

export default App
