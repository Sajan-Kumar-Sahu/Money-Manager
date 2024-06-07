import { StyleSheet, Text, View } from 'react-native'

export const styles = StyleSheet.create({
    signinContainer:{
        flex:1,
        justifyContent:'center',
        marginHorizontal: 20,
    },
    textField:{
        fontSize:20,
        color:'black',
        borderWidth:2,
        borderColor:'#fb8500',
        borderRadius:5,
        marginTop:5,
        paddingStart:8
    },
    btnCmp:{
        backgroundColor:'#fb8500',
        marginHorizontal:120,
        marginTop:30,
        borderRadius:50,
        paddingVertical:8,
        elevation:3,
    }
})