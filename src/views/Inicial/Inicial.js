import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import estiloInicial from './estiloInicial';

function Inicial({navigation}) { 

    const abrirSobre = () => {
        navigation.navigate('Sobre')
    }

    const abrirProdutos = () => {
        navigation.navigate('Produtos')
    }
    return (
        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>

                <Text style={estiloInicial.texto}>Home</Text>

                <TouchableOpacity style={estiloInicial.botaoContainer}  onPress={abrirSobre} >
                    <Text style={estiloInicial.botaoTexto }>Sobre</Text> 
                </TouchableOpacity>

               <TouchableOpacity style={estiloInicial.botaoContainer}  onPress={abrirProdutos} >
                    <Text style={estiloInicial.botaoTexto}>Produtos</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Inicial;