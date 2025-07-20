import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';
import Background from './component/Background';
import Home from './page/Home';
import Resources from './page/Resources';
import Badge from './component/Badge';
<<<<<<< Updated upstream
=======
import Sponsors from './componentnp/Sponsors';
import Sponsorship from './page/Sponsorship';
>>>>>>> Stashed changes

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
                            <Background />
                            <Resources />
                        </div>
                    } />
<<<<<<< Updated upstream
=======
                    <Route path="/countdown" element={
                        <div>
                            <Countdown />
                        </div>
                    } />
                    <Route path="/sponsorship" element={
                        <div>
                            <Navigation />
                            <Background />
                            <Sponsorship />
                        </div>
} />
>>>>>>> Stashed changes
                </Routes>
            </div>
        </Router>
    );
}

export default App;
