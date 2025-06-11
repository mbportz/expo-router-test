import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "../ui/FormElements/Input";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from "../util/validators";

const Profile = () => {
   return (
      <View style={styles.container}>
         <Input validators={[VALIDATOR_MINLENGTH(6), VALIDATOR_EMAIL()]} />
      </View>
   );
};

export default Profile;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
   },
});
