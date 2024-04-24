import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  innerStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  information: {
    fontWeight: "normal",
    color: "#696969",
  },
  extraInformation: {
    color: "#696969",
    textDecorationLine: "underline",
  },
  menuButtonText: {
    fontSize: 25,
    fontWeight: "bold",
  },
  backgroundImage: {
    width: "100%",
    height: 250,
    position: "relative",
  },
  delrayImage: {
    height: 90,
    width: 90,
    marginLeft: 35,
    marginRight: 15,
  },
  overlayTextContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },

  ImageContent: {
    flexDirection: "column",
    color: "white",
    fontWeight: "bold",
  },
  telegram: {
    flexDirection: "column",
    color: "white",
    fontWeight: "bold",
  },
  ImageText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: "#dcdcdc",
  },
  menuContainer: {
    paddingHorizontal: 10,
  },

  para: {
    fontFamily: "sans-serif",
    // marginLeft: 10,
  },
  menuItem: {
    color: "brown",
    fontSize: 17,
  },
  menuPrice: {
    marginLeft: 10,
    fontWeight: "bold",
    color: "brown",
  },

  innerImage: {
    height: 100,
    width: 100,
    marginRight: 10,
  },
  hedersStyle: {
    fontWeight: "bold",
    fontSize: 27,
    color: "red",
    textAlign: "center",
    marginBottom: 3,
  },
  hederParaStyle: {
    textAlign: "center",
    marginBottom: 5,
    fontFamily: "serif",
  },
});
export default styles;
