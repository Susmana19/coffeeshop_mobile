import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    title: {
        fontSize: 70,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'left',
        marginTop: 50,
        marginBottom: 210,
        marginLeft: 15
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
        paddingBottom: 5,
        marginTop: 20,
    },
    forgotpass: {
        marginLeft: 20,
        color: '#FFFFFF',
        marginVertical: 15,
        textDecorationLine: "underline"
    },
    btnLogin: {
        width: '90%',
        height: 60,
        backgroundColor: '#FFBA33',
        borderRadius: 20,
        marginHorizontal: 10,
        justifyContent: "center",
        alignItems: 'center',
        marginTop:  10,
        marginLeft: 17,
        marginBottom: 10     
    },
    textBtnLogin: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20
    },
    textOtherLogin: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 130,
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