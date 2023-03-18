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
        fontWeight: 'bold'
    },
    price: {
        color: '#895537',
        fontWeight: 'bold',
        fontSize: 17
    },
})

export default style;