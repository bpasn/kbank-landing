import { FormState, RegisterOptions, FieldValues, UseFormRegister, FieldErrors, UseFormRegisterReturn } from "react-hook-form"
import { FormFeedback, FormGroup, Input, } from 'reactstrap'
import { InputType } from 'reactstrap/types/lib/Input';
import _ from 'lodash'
interface Props {
  label?: string;
  name: string;
  value?: string;
  type?: InputType;
  errors?: FieldErrors<any>;
  marginBottom?: string;
  formState?: FormState<FieldValues>,
  register: UseFormRegister<any>;
  options?: RegisterOptions,

}

const FormControllerCustom = ({
  name,
  options,
  register,
  formState,
}: Props) => {
  let err = formState?.errors?.[name];
  const registerRs = (fieldName: string, options = {}) => {
    const registeredField: Partial<UseFormRegisterReturn> = register(fieldName, options);
    const ref = registeredField.ref;
    delete registeredField.ref;
    return { ...registeredField, innerRef: ref };
  }
  return (
    <FormGroup>
      <Input
        id={name}
        valid={_.isEmpty(err?.message)}
        invalid={!_.isEmpty(err?.message)}
        aria-invalid={err?.message ? "true" : "false"}
        {...registerRs(name, options)}
      />
      {!_.isEmpty(err) && (
        <FormFeedback>
          {err.message as string}
        </FormFeedback>
      )}
    </FormGroup>
  )
}

export default FormControllerCustom