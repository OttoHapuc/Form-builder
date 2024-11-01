import { useEffect, useState } from 'react';

import { FormPreviewPropsType } from '../../types/organisms/FormPreviewPropsType';
import { FormDownPropsType } from '../../types/molecules/FormDownPropsType';

import NavModulesMap from '../molecules/NavModulesMap';
import StepsForm from '../molecules/StepsForm';
import FormDown from '../organisms/FormDown';
import { FormSectionType, FormFieldType, FieldInputType } from '../../types/simple-form';

const FormPreview = ({ typeForm, setTypeForm }: FormPreviewPropsType) => {
  const [sectionForm, setSectionForm] = useState<FormDownPropsType['sectionForm']>(
    typeForm.sections,
  );

  useEffect(() => {
    setSectionForm(typeForm.sections);
  }, [typeForm.sections]);

  const [selectedSection, setSelectedSection] =
    useState<FormDownPropsType['selectedSection']>(null);
  const [selectedElement, setSelectedElement] =
    useState<FormDownPropsType['selectedElement']>(null);

  const handleDrop = (e: React.DragEvent, index: number) => {
  const draggedElementType = e.dataTransfer.getData('formElementType') as FieldInputType | 'section';
  e.currentTarget.classList.remove('bg-blue-50');
  e.preventDefault();

  if (draggedElementType === 'section') {
    const newSection: FormSectionType = {
      title: `Section ${sectionForm.length + 1}`,
      fields: [],
    };
    setTypeForm({
      ...typeForm,
      sections: [...typeForm.sections, newSection],
    });
    setSelectedSection(newSection);
  } else if (index >= 0 && index < sectionForm.length) {
    const newField: FormFieldType = {
      id: `field-${Date.now()}`,
      label: 'New Field',
      fieldType: draggedElementType,
      config: {
        size: '2xl'
      },
    };
    const updatedSections = [...typeForm.sections];
    updatedSections[index].fields.push(newField);
    setTypeForm({
      ...typeForm,
      sections: updatedSections,
    });
  }
};

  return (
    <section className="flex-1 flex gap-8 p-4 items-center justify-center">
      <section className="w-3/5 flex flex-col gap-3">
        {/* TODO: navegação */}
        <NavModulesMap />

        {/* TODO: form preview */}
        <FormDown
          sectionForm={sectionForm}
          setSectionForm={setSectionForm}
          selectedSection={selectedSection}
          setSelectedSection={setSelectedSection}
          setSelectedElement={setSelectedElement}
          selectedElement={selectedElement}
          onDrop={handleDrop}
        />
      </section>

      {/* TODO: sistema de adicionar steps */}
      <StepsForm />
    </section>
  );
};

export default FormPreview;
