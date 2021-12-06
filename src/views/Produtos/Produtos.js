import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloProdutos from './estiloProdutos';

function Produtos({navigation}) { 

    const voltarInicial = () => {
        navigation.navigate('Inicial')
    }

    return(

        <View style={estiloProdutos.container}>
            <View style={estiloProdutos.borda}>
                 
            <Text style={estiloProdutos.textotitulo}> Produtos </Text>
             <Text style={estiloProdutos.texto}>- Touca de cetim</Text>

             <Text style={estiloProdutos.texto}>- Toalha touca.</Text>

             <Text style={estiloProdutos.texto}>- Porta jaleco</Text>

             <Text style={estiloProdutos.texto}>- Fronha de cetim</Text>

             <Text style={estiloProdutos.texto}>- Scrunchies</Text>

             <Text style={estiloProdutos.texto}>- Ecopads</Text>

             <Text style={estiloProdutos.texto}>- Porta álcool em gel</Text>
                <TouchableOpacity style={estiloProdutos.botaoContainer}>
                   <Text style={estiloProdutos.botaoTexto} onPress={voltarInicial}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default Produtos;