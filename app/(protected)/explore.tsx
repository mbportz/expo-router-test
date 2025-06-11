import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useCount from "../hooks/countHook";

const Explore = () => {
   const [state, add, subtract] = useCount();

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={add}>
            <Text style={styles.buttonText}>+</Text>
         </TouchableOpacity>
         <Text style={styles.text}>{state.count}</Text>
         <TouchableOpacity onPress={subtract}>
            <Text style={styles.buttonText}>-</Text>
         </TouchableOpacity>
      </View>
   );
};

export default Explore;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
   },
   text: {
      fontWeight: "bold",
      fontSize: 50,
      width: 100,
      textAlign: "center",
   },
   buttonText: {
      fontWeight: "bold",
      fontSize: 50,
      width: 100,
      borderWidth: 1,
      borderColor: "grey",
      textAlign: "center",
   },
});
