import { SimpleFormType } from "../simple-form";

export interface FormPreviewPropsType {
  typeForm: SimpleFormType,
  setTypeForm: React.Dispatch<React.SetStateAction<SimpleFormType>>,
  }