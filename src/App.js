import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Background from './component/Background';
import Home from './page/Home';
import Badge from './component/Badge';

function App() {
    useEffect(() => {
        document.title = "HackViolet 2025";
    }, []);
    
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Badge />
                <Routes>
                    <Route path="/" element={
                        <div>
                            <Background />
                            <Home />
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
        // <div className="App">
        //     <Navigation />
        //     <Background />
        //     <Home />
        // </div>
    );

}

export default App;
