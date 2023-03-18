import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#000000', 
        marginTop: 20,
        textAlign: 'center'  
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#6A4029',
        textAlign: 'center'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    btnAddCart: {
        width: '80%',
        height: 60,
        backgroundColor: '#6A4029',
        borderRadius: 20,
        marginHorizontal: 10,
        alignSelf: 'center',
        marginTop:  10,
        marginLeft: 17,
        marginBottom: 10     
    },
    textAddCart: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15
    },    
})

export default style;