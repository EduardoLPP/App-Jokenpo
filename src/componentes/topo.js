import React, { Component } from 'react';
import {View, Image} from 'react-native';

const Estilos = {
    imgTopo: {
        width: 500
    }
}

class Topo extends Component{
    render(){
        return(
            <View>
                <Image source={ require('../../imgs/jokenpo.png')} style={ Estilos.imgTopo }/>
            </View>
        );
    }
}

export default Topo;