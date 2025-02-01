import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Background from './component/Background';
import Home from './page/Home';
import Resources from './page/Resources';
import ResourcesBackground from './component/ResourcesBackground';
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
                    <Route path="/resources" element={
                        <div>
                            <ResourcesBackground />
                            <Resources />
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
