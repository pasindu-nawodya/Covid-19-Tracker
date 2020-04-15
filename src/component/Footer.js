import React, { Component } from 'react'

export default class Footer extends Component {
    render() {

        var d = new Date();
        var n = d.getFullYear();

        return (   
        
            <div>
                <div className="position"></div>
                
                <div class="footer-copyright bg-dark text-center py-3  text-light">© {n} Copyright: Design by
                    <a href="https://pasindu-nawodya.github.io/"> Pasindu Nawodya</a>
                </div>

            </div>
            

        )
    }
}
