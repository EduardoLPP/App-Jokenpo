import React, { Component } from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    txtEscolha: {
        marginVertical: 10,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black'
    },
    escolhas: {
        fontWeight: 'bold',
        fontSize: 18,
        alignItems: 'center',
        marginVertical: 10
    },
    imgIcon: {
        width: 150,
        height: 150
    }
});

class Icone extends Component{
    render(){
        if(this.props.escolha == 'Pedra'){
            return(
                <View style={ styles.escolhas }>
                    <Text style={ styles.txtEscolha } >{ this.props.jogador }</Text>
                    <Image source={ require('../../imgs/pedra.png') } style={ styles.imgIcon }/>
                </View>
            )
        }else if(this.props.escolha == 'Papel'){
             return(
                <View style={ styles.escolhas }>
                    <Text style={ styles.txtEscolha }>{ this.props.jogador }</Text>
                    <Image source={ require('../../imgs/papel.png')} style={ styles.imgIcon }/>
                </View>
            )
        }else if(this.props.escolha == 'Tesoura'){
             return(
                <View style={ styles.escolhas }>
                    <Text style={ styles.txtEscolha }>{ this.props.jogador }</Text>
                    <Image source={ require('../../imgs/tesoura.png') } style={ styles.imgIcon }/>
                </View>
            )
        }else{
            return false;
        }            
    }
}

export default Icone;