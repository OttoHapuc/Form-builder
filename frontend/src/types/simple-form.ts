import { WidthElementType } from '../constants/UI/width/index';
export type SimpleFormType = {
  steps: SimpleFormStepType[];
  sections: FormSectionType[];
};

export type SimpleFormStepType = {
  id: string;
  title: string;
  iconName?: string;
  sections: FormSectionType[];
};

export type FormSectionType = {
  id: string;
  title?: string;
  fields: FormFieldType[];
};

export type FieldInputType =
| 'text'
| 'number'
| 'date'
| 'select'
| 'checkbox'
| 'radio'
| 'textarea'
| 'file';

// Tipo base para qualquer campo do formulário
export type FormFieldType = {
  id: string; // Nome da coluna na tabela pertencente
  label: string;
  value?: string | number | boolean | File | null | readonly string[];
  fieldType: FieldInputType;
  config: FieldConfig;
};

export type FieldConfig = {
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  color?: string;
  maxLength?: number;
  options?: SelectOptionType[];
  mask?: string;
  onChange?: (_value: string | number | boolean | File | null) => void;
  customValidationRegex?: RegExp;
  onActionTrigger?: () => void;
  size?: WidthElementType;
  block?: boolean;
  triggers?: FieldTriggerType[];
  validations?: FieldValidationType[];
};

export type SelectOptionType = {
  label: string;
  value: string | number;
};

// Gatilhos para ações e dependências do campo
export type FieldTriggerType = {
  triggerType: 'dependency' | 'customFunction';
  dependentFieldIds?: string[];
  requestUrl?: string;
  actionFunction?: () => void;
};

// Validações específicas para o campo
export type FieldValidationType = {
  validationType: 'regex' | 'previousField' | 'date' | 'remote';
  regex?: RegExp;
  dependentFieldId?: string;
  validationUrl?: string;
};
