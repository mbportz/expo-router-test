import { useReducer } from "react";

type countType = {
   count: number;
};

const initCountState: countType = {
   count: 0,
};

enum REDUCER_ACTION_TYPE {
   INCREMENT = "increment",
   DECREMENT = "decrement",
}

type reducerAction = {
   type: string;
   payload?: countType;
};

const reducer = (state: countType, action: reducerAction): countType => {
   switch (action.type) {
      case REDUCER_ACTION_TYPE.INCREMENT: {
         return { count: state.count + 1 };
      }
      case REDUCER_ACTION_TYPE.DECREMENT: {
         return { count: state.count - 1 };
      }
      default:
         return state;
   }
};

export type CountItemType = [countType, () => void, () => void];

const useCount = (): CountItemType => {
   const [state, dispatch] = useReducer(reducer, initCountState);

   const add = () => {
      dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
   };

   const subtract = () => {
      dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
   };

   return [state, add, subtract];
};

export default useCount;
