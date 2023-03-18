import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    cardWrap: {
        width: '80%',
        marginHorizontal: 25,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 20        
    },
    card: {
        backgroundColor: "#fff",
        width: 120,
        height: 150,
        elevation: 7,
        borderRadius: 30,
        marginRight: 20
    },
    titleProduct: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    price: {
        textAlign: 'center',
        marginTop: 10,
        color: '#895537',
        fontWeight: 'bold',
        fontSize: 17
    },
    btnCheckout: {
        width: '80%',
        height: 60,
        backgroundColor: '#FFBA33',
        borderRadius: 20,
        marginHorizontal: 10,
        alignSelf: 'center',
        marginTop:  10,
        marginLeft: 5,
        marginBottom: 20    
    },
    textCheckout: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: 15
    },
    titleBill: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ADADAF'
    },
})

export default style;