import { FormFieldType } from '../simple-form';
import { FormDownPropsType } from './FormDownPropsType';

export type RenderInputFormType =Pick<FormDownPropsType, 'selectedElement' | 'setSelectedElement'> & {
    input: FormFieldType;
}