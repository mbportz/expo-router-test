import React, { ReactElement, useReducer, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { validate, type Validator } from "../../util/validators";

type InitialStateType = {
   value: string;
   isValid: boolean;
   validators?: Validator[];
};

enum REDUCER_ACTION_TYPE {
   ON_CHANGE = "onchangeText",
}

const initialState: InitialStateType = {
   value: "",
   isValid: false,
   validators: [],
};

type ReducerActions = {
   value: string;
   type: REDUCER_ACTION_TYPE;
   payload?: InitialStateType;
};

const reducer = (
   state: InitialStateType,
   action: ReducerActions
): InitialStateType => {
   switch (action.type) {
      case REDUCER_ACTION_TYPE.ON_CHANGE: {
         return {
            ...state,
            value: action.value ?? "",
            isValid: validate(action.value, action.payload?.validators ?? []),
         };
      }
      default:
         return state;
   }
};

type InputProps = {
   validators?: Validator[];
   id?: string;
   label?: string;
   isPassword?: boolean;
};

const Input = ({
   validators,
   id,
   label,
   isPassword,
}: InputProps): ReactElement => {
   const [state, dispatch] = useReducer(reducer, {
      ...initialState,
   });
   const [showPassword, setShowPassword] = useState<boolean>(!!isPassword);

   return (
      <View style={styles.container}>
         <Text style={!state.isValid && { color: "red" }}>{label}</Text>
         <View
            style={[
               styles.textInputContainer,
               !state.isValid && { borderColor: "red" },
            ]}
         >
            <TextInput
               id={id}
               style={styles.input}
               value={state.value}
               onChangeText={(textValue) =>
                  dispatch({
                     type: REDUCER_ACTION_TYPE.ON_CHANGE,
                     value: textValue,
                     payload: { ...state, validators },
                  })
               }
               secureTextEntry={showPassword}
               placeholder={label}
            />
            {isPassword && (
               <Pressable
                  style={{ justifyContent: "flex-end" }}
                  onPress={() => setShowPassword((prev) => !prev)}
               >
                  <Text>show</Text>
               </Pressable>
            )}
         </View>
      </View>
   );
};

export default Input;

const styles = StyleSheet.create({
   textInputContainer: {
      borderRadius: 7,
      borderWidth: 2,
      padding: 10,
      width: 300,
      flexDirection: "row",
      flex: 1,
   },
   input: {
      flex: 1,
      textAlign: "left",
   },
   container: {
      gap: 10,
      height: 70,
   },
});
