import { FormSectionType } from '../simple-form';
import { FormDownPropsType } from './FormDownPropsType';

export type RenderSectionFormType = Pick<
  FormDownPropsType,
  'selectedElement' | 'setSelectedElement' | 'selectedSection' | 'setSelectedSection' | 'onDrop' | 'handleDelete'
> & {
  onDragOver: (_e: React.DragEvent) => void;
  onDragLeave: (_e: React.DragEvent) => void;
  section: FormSectionType;
  indexS: number;
  
};
