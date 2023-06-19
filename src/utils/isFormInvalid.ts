import { FieldErrors, FieldValues } from "react-hook-form";

export const isFormInvalid = (error: FieldErrors<FieldValues>) => {
    if (Object.keys(error).length > 0) return true;
    return false;
}