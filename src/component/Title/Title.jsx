import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        
        var graph = (this.props.graph)
        var title = (this.props.country?this.props.country:"GLOBAL CASES");
        

        return (
            
            <div className="d-flex justify-content-around mt-5 mb-5">
                <div className="alert alert-dark text-center" style={{width:"65%"}} role="alert">
                    <h5><b>{graph}{title}</b></h5>
                </div>
            </div>
            
        )
    }
}
