type ValidatorType =
   | "REQUIRE"
   | "MINLENGTH"
   | "MAXLENGTH"
   | "MIN"
   | "MAX"
   | "EMAIL"
   | "FILE";

export interface Validator {
   type: ValidatorType;
   val?: number;
}

export const VALIDATOR_REQUIRE = (): Validator => ({ type: "REQUIRE" });
export const VALIDATOR_FILE = (): Validator => ({ type: "FILE" });
export const VALIDATOR_MINLENGTH = (val: number): Validator => ({
   type: "MINLENGTH",
   val: val,
});
export const VALIDATOR_MAXLENGTH = (val: number): Validator => ({
   type: "MAXLENGTH",
   val: val,
});
export const VALIDATOR_MIN = (val: number): Validator => ({
   type: "MIN",
   val: val,
});
export const VALIDATOR_MAX = (val: number): Validator => ({
   type: "MAX",
   val: val,
});
export const VALIDATOR_EMAIL = (): Validator => ({ type: "EMAIL" });

export const validate = (value: string, validators: Validator[]): boolean => {
   let isValid = true;
   for (const validator of validators) {
      if (validator.type === "REQUIRE") {
         isValid = isValid && value.trim().length > 0;
      }
      if (validator.type === "MINLENGTH") {
         isValid = isValid && value.trim().length >= (validator.val ?? 0);
      }
      if (validator.type === "MAXLENGTH") {
         isValid =
            isValid && value.trim().length <= (validator.val ?? Infinity);
      }
      if (validator.type === "MIN") {
         isValid = isValid && +value >= (validator.val ?? 0);
      }
      if (validator.type === "MAX") {
         isValid = isValid && +value <= (validator.val ?? Infinity);
      }
      if (validator.type === "EMAIL") {
         isValid = isValid && /^\S+@\S+\.\S+$/.test(value);
      }
   }
   return isValid;
};
