import { StyleSheet, Dimensions } from "react-native";

const style = StyleSheet.create({
    sectionTitle: {
        color: '#6A4029',
        fontSize: 17,
        fontWeight: '700',
    },
    productTitle: {
        fontWeight: "bold",
        width: '70%',
        fontSize: 25,
        textAlign: "center",
        color: "#333",
        marginBottom: 5
    },
    productPrice: {
        color: "#6A4029",
        fontSize: 17,
        fontWeight: "700",
        marginBottom: 20
    },   
    cardWrap: {
    width: Dimensions.get("window").width / 1.5,
    marginBottom: 25,
    padding: 15,
    alignItems: "center",
    },
    card: {
        backgroundColor: "#fff",
        height: 215,
        elevation: 7,
        width: "85%",
        borderRadius: 30,
        marginTop: 40,
        justifyContent: "flex-end",
        alignItems: "center",
    },   
})

export default style;