import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 35,
        marginVertical: 20
    },
    card: {
        width: '85%',
        height: 165,
        alignSelf: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        marginTop: 10,
        flexDirection: 'row',
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginBottom: 20,
        elevation: 2
    },
    cardText:{
        width: '70%',
        marginLeft: 10,
        marginVertical: 10,
        paddingVertical: 5
    },
    cardName: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 5
    },
    cardData: {
        marginBottom: 5,
        paddingBottom: 5,
        color: '#6A4029',
        borderBottomColor: '#9F9F9F',
        borderBottomWidth: 1
    },
    cardOption: {
        width: '85%',
        height: 60,
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 20,
        marginBottom: 15,
        elevation: 2
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
        marginBottom: 10,
        elevation: 2   
    },
    textBtnLogin: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20
    },
   

})

export default style;