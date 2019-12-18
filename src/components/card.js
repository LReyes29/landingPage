import React from 'react';

export function Card() {
    return (
        <div className="card mt-0">
            <img src="./img/500x325.png" class="card-img-top" alt="..." />
            <div className="card-body text-center">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

            </div>
            <div className="card-footer text-center">
                <a href="" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
    )
}