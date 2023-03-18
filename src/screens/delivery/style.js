import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginLeft: 30,
        marginVertical: 15
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    cardWrap: {
        marginBottom: 20
    },
    card: {
        width: 300,
        height: 150,
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 20,
        alignSelf: 'center',
        paddingHorizontal: 30,
        paddingVertical: 15,
    },
    textCard: {
        fontSize: 17,
        paddingBottom: 5,
        paddingTop: 5,
        borderBottomWidth: 1,
        borderColor: '#ADADAF'
    },
   btnAddCart: {
        width: '85%',
        height: 60,
        backgroundColor: '#6A4029',
        borderRadius: 20,
        marginHorizontal: 10,
        alignSelf: 'center',
        marginTop:  20,
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