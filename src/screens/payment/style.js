import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    title: {
        width: '80%',
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 30,
        marginVertical: 15,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#9F9F9F'
    },
    sectionWrap: {
        marginTop: 20,
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#9F9F9F',
        marginLeft: 20
        
    },
    textWrap: {
        flexDirection: 'row',
    },
    textItem: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 5
    },
    textPrice: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 50
    },
   btnAddCart: {
        width: '85%',
        height: 60,
        backgroundColor: '#6A4029',
        borderRadius: 20,
        marginHorizontal: 10,
        alignSelf: 'center',
        marginTop:  50,
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