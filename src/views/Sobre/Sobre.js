import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import estiloSobre from './estiloSobre';

function Sobre() {

    return(

        <View style={estiloSobre.container}>
            <View style={estiloSobre.borda}>
                 
            <Text style={estiloSobre.textotitulo}> Alive Costuras </Text>
             <Text style={estiloSobre.texto}>A Alive Costuras é uma empresa que tem como objetivo levar conforto,
             praticidade e encanto pana nossas clientes.</Text>

             <Text style={estiloSobre.texto}>Cada um de nossos produtos é feito à mão, pensando nas preferências
             das clientes, de modo que o resultado final fique exatamente como elas desejam.</Text>

             <Text style={estiloSobre.texto}>Prezamos pela comunicação, respeito e qualidade 
             de nosso trabalho.</Text>

             <Text style={estiloSobre.texto}>Qualquer dúvida, estamos à disposição</Text>

                <TouchableOpacity style={estiloSobre.botaoContainer}>
                   <Text style={estiloSobre.botaoTexto}>Voltar</Text> 
                </TouchableOpacity>  
            </View>
        </View>
    )
}
export default Sobre;