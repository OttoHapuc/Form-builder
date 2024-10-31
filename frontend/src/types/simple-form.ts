// Tipo principal para o formulário simples
export type SimpleFormType = {
  steps?: SimpleFormStepType[]; // Se presente, representa um formulário com etapas
  sections: FormSectionType[]; // Seções principais do formulário se for single-step
};

export type SimpleFormStepType = {
  id: string;
  title: string; // Título do Step
  iconName?: string; // Nome do ícone do Step
  sections: FormSectionType[]; // Seções contidas no Step
};

export type FormSectionType = {
  title?: string; // Título opcional da seção
  columns: ColumnType[]; // Configuração das colunas da seção
};

// Tipo para a configuração de colunas dentro de cada seção
export type ColumnType = {
  widthPercentage: number; // Largura em %
  fields: FormFieldType[]; // Lista de campos dentro da coluna
};

// Tipo base para qualquer campo do formulário
export type FormFieldType = {
  id: string; // ID único do campo
  label: string; // Rótulo do campo
  fieldType: FieldInputType; // Tipo específico do campo
  placeholder?: string; // Placeholder do campo
  required?: boolean; // Campo obrigatório
  readOnly?: boolean; // Somente leitura
  disabled?: boolean; // Desabilitado (oculto apenas no CRUD view)
  color?: string; // Cor customizada
  triggers?: FieldTriggerType[]; // Gatilhos
  validations?: FieldValidationType[]; // Validações
  configOptions: FieldConfigOptions; // Configurações específicas do campo
};

// Especificação dos tipos de input aceitos no formulário
export type FieldInputType =
  | 'inputText'
  | 'inputNumber'
  | 'date'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'textarea'
  | 'file';

// Configurações específicas de cada tipo de input
export type FieldConfigOptions = {
  maxLength?: number; // Para campos de texto e textarea
  options?: SelectOptionType[]; // Opções para selects e radio
  mask?: string; // Máscara, caso aplicável
  customValidationRegex?: RegExp; // Regex customizada para validação
  onActionTrigger?: () => void; // Função customizada para ação do campo
  size?: 'small' | 'medium' | 'large'; // Tamanho de campo
};

// Tipo para opções de selects e radio buttons
export type SelectOptionType = {
  label: string;
  value: string | number;
};

// Gatilhos para ações e dependências do campo
export type FieldTriggerType = {
  triggerType: 'dependency' | 'customFunction';
  dependentFieldIds?: string[]; // IDs dos campos dependentes
  requestUrl?: string; // URL para preenchimento dinâmico
  actionFunction?: () => void; // Função de ação customizada
};

// Validações específicas para o campo
export type FieldValidationType = {
  validationType: 'regex' | 'previousField' | 'date' | 'remote';
  regex?: RegExp;
  dependentFieldId?: string;
  validationUrl?: string;
};
