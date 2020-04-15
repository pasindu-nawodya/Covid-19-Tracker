import React, { Component } from 'react';
import covid from './covid.png';

export default class NavBar extends Component {
    render() {

        const date = new Date();
        const today = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();

        return (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">            
                <a className="navbar-brand " href="#"> <img src={covid.png}/> <b>COVID-19 : LIVE UPDATE</b><br />
                <span className="badge badge-secondary ml-2">Today :{today}</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto"></ul>
                    <form className="form-inline my-2 my-lg-0">
                        <a className="" href="#"><button type="button" className="btn btn-outline-info">Developed by</button></a>                      
                    </form>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </div>
            </nav>
        )
    }
}
