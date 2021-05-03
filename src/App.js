import { BrowserRouter as Router } from 'react-router-dom'
import Weather from './Component/Weather'
import { GlobalStyle } from './GlobalStyle'

function App() {
    return ( 
        <Router>
        <GlobalStyle />
        <Weather />
        </Router>
    );
}
export default App;

