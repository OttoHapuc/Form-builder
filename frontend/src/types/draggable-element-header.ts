import { FieldInputType } from './simple-form';

// Tipo para representar o Header de Elementos Arrastáveis
export type DraggableElementHeaderType = {
  elements: Array<{
    type: FieldInputType;
    label: string;
    iconName: string;
  }>;
  onElementDrag: (_element: FieldInputType) => void; // Função ao arrastar elemento
};
