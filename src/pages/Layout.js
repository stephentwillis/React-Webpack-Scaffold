import React from "react";
import { Outlet } from "react-router-dom";
import moment from 'moment';

import Navigation from "./Navigation";

import config from '../config';

const Layout = () => {
    return (
    <>
        <header className="app__global-header row">
            <section className="col">
                <Navigation />                
            </section>
        </header>
        
        <main className="app__main">
            <Outlet />
        </main>

        <footer className="app__global-footer row">
        </footer>
    </>
    );
};

export default Layout;