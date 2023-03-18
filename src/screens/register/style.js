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
    textInput: {
        borderBottomWidth: 2,
        color: '#FFFFFF',
        borderColor: '#FFFFFF',
        marginHorizontal: 20,
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5,
        marginBottom: 20,
    },
    forgotpass: {
        marginLeft: 20,
        color: '#895537',
        textDecorationLine: "underline"
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
    textOtherLogin: {
        color: '#9A9A9D',
        marginLeft: 120
    },
    btnLoginGoogle: {
        width: '90%',
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: 'center',
        marginTop:  10,
        marginLeft: 17,
        borderWidth: 1,
        borderColor: '#9F9F9F',
        flexDirection: 'row'         
    },
    textBtnLoginGoogle: {
        color: 'black',
        fontWeight: '300',
        fontSize: 20,
    },

})

export default style;