import React from "react";
import Header from "../components/header/Header";

export default class Index extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <h2>I couldn't find that page, but here's a haiku:</h2>
                    <p>Error: 404</p>
                    <p>Link not found, like the next line</p>
                </div>
            </div>
        );
    }
}