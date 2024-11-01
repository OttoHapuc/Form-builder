import { IconNameType } from '../../utils/icons/index';
import { FieldInputType } from '../simple-form';

export interface ElementHeaderPropsType {
    elements: SubElementsHeaderPropsType[];
  }

  export type SubElementsHeaderPropsType = {
    type: FieldInputType | 'section';
    icon: IconNameType;
    label: string;
  }