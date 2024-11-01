import { FormSectionType } from '../simple-form';
import { FormDownPropsType } from './FormDownPropsType';

export type RenderSectionFormType = Pick<
  FormDownPropsType,
  'selectedElement' | 'setSelectedElement' | 'selectedSection' | 'setSelectedSection' | 'onDrop'
> & {
  onDragOver: (_e: React.DragEvent) => void;
  onDragLeave: (_e: React.DragEvent) => void;
  section: FormSectionType;
  indexS: number;
};
