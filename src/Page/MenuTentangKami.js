import React, { Component } from 'react'

export class MenuTentangKami extends Component {
    constructor (props){
        super (props);
        this.state = {
            tentang: "Warung Nusantara adalah Restoranyang bernuansa Msakan Khas Nusantara, Kami ada untuk membuat adna menkmatai masakan khas Nusantara",
        };
    }
    render() {
        return (
            <div align="center">
                <p>Tentang Kami</p>{this.state.tentang}
            </div>
        )
    }
}

export default MenuTentangKami
