import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Background from './component/Background';
import Home from './page/Home';
import Resources from './page/Resources';
import Countdown from './page/Countdown';
import ResourcesBackground from './component/ResourcesBackground';
import Badge from './component/Badge';
import Sponsors from './component/Sponsors';

function App() {
    useEffect(() => {
        document.title = "HackViolet 2025";
           <Sponsors />  
    }, []);

    return (
        <Router>
            <div className="App">
                <Badge />
                <Routes>
                    <Route path="/*" element={
                        <div>
                            <Navigation />
                            <Background />
                            <Home />
                        </div>
                    } />
                    <Route path="/resources" element={
                        <div>
                            <Navigation />
                            <ResourcesBackground />
                            <Resources />
                        </div>
                    } />
                    <Route path="/countdown" element={
                        <div>
                            <Countdown />
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
