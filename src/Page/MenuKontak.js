import React, { Component } from 'react'

export class MenuKontak extends Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                 alamat:"Jalan Raya Cikampek No 1, Cikampek Jawabarat 41373",
                 kontak:"089630121221"
            };
        
        
    }
    render() {
        return (
            <div>
                <center>
                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami : {this.state.kontak}</h4>
                </center>
            </div>
        )
    }
}

export default MenuKontak
