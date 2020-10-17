import React, { Component } from 'react';
import Breadcrumb from "../partials/Breadcrumb";

class Dashboard extends Component
{
    constructor(props)
    {
        super(props);
        document.body.classList.remove("login-page");
        document.body.classList.add("skin-green");
    }
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <h1>
                        Dashboard
                        <small>Control panel</small>
                    </h1>
                    <Breadcrumb />
                </section>
                <section className="content">
                </section>
            </div>
        );
    }
}

export default Dashboard;
