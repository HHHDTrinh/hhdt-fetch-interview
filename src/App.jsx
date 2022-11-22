import { Home } from './pages';
import { Navbar } from './components';

import './App.css';

const App = () => {
    return (
        <div className="h-screen">
            <Home />
            <Navbar />
        </div>
    );
};

export default App;
