import { useState } from 'react';

import { SubElementsHeaderPropsType } from '../types/organisms/ElementHeaderPropsType';
import { SimpleFormType } from '../types/simple-form';

import ElementHeader from '../components/templates/ElementHeader';
import FormPreview from '../components/templates/FormPreview';

export const FORM_ELEMENTS: SubElementsHeaderPropsType[] = [
  { type: 'section', icon: 'TbNewSection', label: 'Section' },
  { type: 'text', icon: 'ImTextWidth', label: 'Text Input' },
  { type: 'number', icon: 'GoNumber', label: 'Number Input' },
  { type: 'select', icon: 'GoMultiSelect', label: 'Select' },
  { type: 'checkbox', icon: 'IoMdCheckboxOutline', label: 'Checkbox' },
  { type: 'radio', icon: 'IoMdRadioButtonOn', label: 'Radio' },
  { type: 'file', icon: 'FaRegFile', label: 'File' },
];

const Home = () => {
  const [typeForm, setTypeForm] = useState<SimpleFormType>({
    steps: [],
    sections: [],
  });

  return (
    <main className="min-h-dvh w-full relative flex flex-col bg-slate-200 overflow-hidden">
      <ElementHeader elements={FORM_ELEMENTS} />
      <FormPreview typeForm={typeForm} setTypeForm={setTypeForm} />
    </main>
  );
};

export default Home;
