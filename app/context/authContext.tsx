import { useRouter } from "expo-router";
import React, {
   createContext,
   type PropsWithChildren,
   ReactElement,
   useState,
} from "react";

type AuthState = {
   isLoggedIn: boolean;
   logIn: () => void;
   logOut: () => void;
};

export const AuthContext = createContext<AuthState>({
   isLoggedIn: false,
   logIn: () => {},
   logOut: () => {},
});

export function AuthProvider({ children }: PropsWithChildren): ReactElement {
   const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

   const router = useRouter();

   const logIn = () => {
      setIsLoggedIn(true);
      router.replace("/");
   };

   const logOut = () => {
      setIsLoggedIn(false);
      router.replace("/login");
   };

   return (
      <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
         {children}
      </AuthContext.Provider>
   );
}
