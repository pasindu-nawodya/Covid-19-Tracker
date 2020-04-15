import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            
            <div className="d-flex justify-content-around mt-5 mb-5">
                <div className="alert alert-dark text-center" style={{width:"65%"}} role="alert">
                    <h5><b>{this.props.TitleName}</b></h5>
                </div>
            </div>
            
        )
    }
}
