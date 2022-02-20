import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      categoryGridItem: {
        flex: 1,
        margin: 15,
        height: 150,
      },
      productGridItem: {
        flex: 1,
        margin: 10,
        height: 500,
        maxWidth:500
        
      },
      // 2. Add style to container:
      container: {
        fontFamily: "my-font",
        flex: 1,
        borderRadius: 15,
        shadowColor: "black",
        shadowOpacity: 0.6,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 3, // for android - to see the shadow
        justifyContent: "center",
        alignItems: "center",
      },
      // 3. Add style to title:
      title: {
        fontFamily: "my-font",
        fontSize: 20,
        margin: 10,
      },
      Ctitle: {
        backgroundColor:"white",
        fontFamily: "my-font",
        fontSize: 20,
        margin: 10,
      },
      priceTxt: {
        backgroundColor:"white",
        fontFamily: "my-font",
        fontSize: 18,
        margin: 10,
      },
      txt:{
        margin:20,
        fontSize:15

      },
      image: {
        width:500,
        height: 300,
      },
      button:{
        fontFamily: "my-font",
        width:100,
      },
      input: {
        flex:1,
        maxWidth:300,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      form:{
        fontFamily: "my-font",
        alignItems:"center",
        justifyContent:"center",
        alignContent:"center",
      },
});