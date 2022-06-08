import React, { Component } from 'react';
import {AppRegistry, 
        Text,
        View,
        Button,
        StyleSheet} from 'react-native';

import Topo from './src/componentes/topo'
import Icone from './src/componentes/icone'

const Estilos = {
    imgTopo: {
        width: 455
    }
}

const styles = StyleSheet.create({
    btnEscolha: {
        width: 90
    },
    painelAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 20
    },
    palco: {
        alignItems: 'center',
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 500
    },
    txtResultado: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'red',
        height: 100,
        marginTop: 20
    },
    principal: {
        flex: 1,
        backgroundColor: 'white'
    }
});


//Componente principal da Aplicacao
class app3 extends Component {

    //Construtor da classe
    constructor(props){
        super(props);

        this.state = {  escolhaUsuario: '', escolhaComputador : '', resultado : ''};
    }

    //Funcao de calcula o resultado
    jokenpo(escolhaUsuario) {
        

        var numAleatorio = Math.floor(Math.random() * 3);
        var escolhaComputador = '';

        switch(numAleatorio){
            case 0: escolhaComputador = 'Pedra'; break;
            case 1: escolhaComputador = 'Papel'; break;
            case 2: escolhaComputador = 'Tesoura'; break;
        }

        var resultado = '';

        if(escolhaComputador === 'Pedra'){
            if(escolhaUsuario === 'Pedra'){
                resultado = 'Empate :|';
            }
            
            if(escolhaUsuario === 'Papel'){
                resultado = 'Você ganhou! :)';
            }

            if(escolhaUsuario === 'Tesoura'){
                resultado = 'Você perdeu! :(';
            }
        }

        if(escolhaComputador === 'Papel'){
            if(escolhaUsuario === 'Papel'){
                resultado = 'Empate :|';
            }
            
            if(escolhaUsuario === 'Tesoura'){
                resultado = 'Você ganhou! :)';
            }

            if(escolhaUsuario === 'Pedra'){
                resultado = 'Você perdeu! :(';
            }
        }

        if(escolhaComputador === 'Tesoura'){
            if(escolhaUsuario === 'Tesoura'){
                resultado = 'Empate :|';
            }
            
            if(escolhaUsuario === 'Pedra'){
                resultado = 'Você ganhou! :)';
            }

            if(escolhaUsuario === 'Papel'){
                resultado = 'Você perdeu! :(';
            }
        }

        this.setState({ escolhaUsuario : escolhaUsuario,
                        escolhaComputador : escolhaComputador,
                        resultado : resultado});

    }

    //Funcao de renderizar a view
    render(){
        return(
            <View style={ styles.principal } >
                <Topo></Topo>

                <View style= { styles.painelAcoes }>
                    <View style={ styles.btnEscolha }>
                        <Button title="pedra" onPress={ () => { this.jokenpo('Pedra') } }/>
                    </View>

                    <View style={ styles.btnEscolha }>
                        <Button title="papel" onPress={ () => { this.jokenpo('Papel') } }/>
                    </View>

                    <View style={ styles.btnEscolha }>
                        <Button title="tesoura" onPress={ () => { this.jokenpo('Tesoura') } }/>
                    </View>
                </View>

                <View style={ styles.palco} >
                    <Text style={ styles.txtResultado }>{ this.state.resultado }</Text>

                    <Icone escolha={this.state.escolhaComputador} jogador='Computador'></Icone>
                    <Icone escolha={this.state.escolhaUsuario} jogador='Usuario'></Icone>

                </View>
                
            </View>
        )
    }
}

AppRegistry.registerComponent('app3', () => app3);
