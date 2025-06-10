import { useContext } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthContext } from "./context/authContext";

export default function Index() {
   const authState = useContext(AuthContext);

   return (
      <View style={styles.container}>
         <Text>This is the login Page</Text>

         <TouchableOpacity style={styles.button} onPress={authState.logIn}>
            <Text style={styles.buttonText}>Login</Text>
         </TouchableOpacity>
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
   },
   button: {
      height: 50,
      width: 100,
      borderColor: "blue",
      borderWidth: 1,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 9,
   },
   buttonText: { fontSize: 20, fontWeight: "bold", color: "blue" },
});
