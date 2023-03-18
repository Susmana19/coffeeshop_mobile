import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    title: {
        fontSize: 70,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 140
    },
    screenLogin: {
        backgroundColor: 'white',
        height: '100%'
    },
    textLogin: {
        fontSize: 70,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 18,
        color: '#9F9F9F',
        marginHorizontal: 20,
        fontWeight: 'bold'
    },
    textInput: {
        borderBottomWidth: 2,
        color: '#000000',
        borderColor: '#9F9F9F',
        marginHorizontal: 20,
        fontSize: 15,
        paddingBottom: 10,
        marginBottom: 20,
    },
    btnLogin: {
        width: '90%',
        height: 60,
        backgroundColor: '#6A4029',
        borderRadius: 20,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: 'center',
        marginTop:  10,
        marginLeft: 17,
        marginBottom: 10     
    },
    textBtnLogin: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    },


})

export default style;