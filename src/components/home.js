import React from 'react';
import { Navbar } from './navbar';
import { Jumbotron } from './jumbotron';
import { Card } from './card';
import { Footer } from './footer.js';


export function Home() {

    return (
        <>
            <div className="container-fluid bg-dark">
                <div className="row">
                    <div className="col-md-12">
                        <div className="container px-0">
                            <div className="row">
                                <div className="col-md-12">
                                    <Navbar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Jumbotron />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <Card />
                    </div>
                    <div className="col-md-3">
                        <Card />
                    </div>
                    <div className="col-md-3">
                        <Card />
                    </div>
                    <div className="col-md-3">
                        <Card />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark py-5 mt-4">
                <Footer />
            </div>

        </>

    )

}