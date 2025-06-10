import { Redirect, Tabs } from "expo-router";
import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { AuthContext } from "../context/authContext";

export default function Protectedlayout() {
   const authState = useContext(AuthContext);

   if (!authState.isLoggedIn) {
      return <Redirect href="/login" />;
   }

   return (
      <Tabs screenOptions={{ headerShown: true, title: "My App" }}>
         <Tabs.Screen
            name="index"
            options={{
               tabBarLabel: "Dashboard",
               headerRight: () => (
                  <TouchableOpacity onPress={authState.logOut}>
                     <Text>Logout</Text>
                  </TouchableOpacity>
               ),
               headerShown: true,

            }}
         />
         <Tabs.Screen name="profile" options={{ tabBarLabel: "Profile" }} />
         <Tabs.Screen name="explore" options={{ tabBarLabel: "Explore" }} />
      </Tabs>
   );
}
