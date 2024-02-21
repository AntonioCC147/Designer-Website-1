import './App.css';

import Main from './components/Main/Main';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div className="open-sans">
            <Main/>
            <About/>
        </div>
    )
}