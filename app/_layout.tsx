import { Stack } from "expo-router";
import { useContext } from "react";

import { AuthContext, AuthProvider } from "./context/authContext";

export default function RootLayout() {
   const authState = useContext(AuthContext);

   return (
      <AuthProvider>
         <Stack>
            <Stack.Screen
               name="login"
               options={{
                  title: "Login",
                  headerShown: false,
                  animation: "none",
               }}
            />
            <Stack.Screen
               name="(protected)"
               options={{
                  title: "Home",
                  headerShown: false,
                  animation: "none",
               }}
            />
         </Stack>
      </AuthProvider>
   );
}
