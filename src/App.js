import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './component/Navigation';

import Home from './page/Home';
import Resources from './page/Resources';
import Countdown from './page/Countdown';
import ResourcesBackground from './component/ResourcesBackground';
import Badge from './component/Badge';
import Sponsors from './component/Sponsors';
import SponsorPage from './page/SponsorPage';
import Maintenance from "./component/Maintenance";

{/* When done developing Home.js, reroute Maintenance to path="/*" */}
{/* Go to /dev-home to see the developing home page*/}

function App() {
    useEffect(() => {
        document.title = "HackViolet 2026";
           <Sponsors />
    }, []);

    return (
        <Router>
            <div className="App">
                <Badge />
                <Routes>
                    {/* maintenance Route 
                    <Route path="/*" element={<Maintenance />} />
                    */}

                    {/* dev home route */}
                    <Route path="/*" element={
                        <div>
                            <Navigation />
                            
                            <Home />
                        </div>
                    } />
                    <Route path="/resources" element={
                        <div>
                            <Navigation />
                            <Resources />
                        </div>
                    } />
                    <Route path="/countdown" element={
                        <div>
                            <Countdown />
                        </div>
                    } />
                    <Route path="/sponsorpage" element={
                        <div>
                            <Navigation />
                            <SponsorPage />
                        </div>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;