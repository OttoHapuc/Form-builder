import { useEffect, useState } from 'react';

import { FormPreviewPropsType } from '../../types/organisms/FormPreviewPropsType';
import { FormDownPropsType } from '../../types/molecules/FormDownPropsType';

import NavModulesMap from '../molecules/NavModulesMap';
import StepsForm from '../molecules/StepsForm';
import FormDown from '../organisms/FormDown';
import {
  FieldInputType,
} from '../../types/simple-form';

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

  const handleDrop = (
    e: React.DragEvent,
    sectionIndex: number,
    fieldIndex: number | null, // null indica que o `drop` é na seção, um número indica a posição do campo
  ) => {
    const draggedElementType = e.dataTransfer.getData('formElementType') as
      | FieldInputType
      | 'section';
    e.preventDefault();
    e.currentTarget.classList.remove('bg-blue-50');

    if (draggedElementType === 'section') {
      // Adiciona uma nova seção
      const newSection = {
        id: `section-${Date.now()}`,
        title: `Section ${typeForm.sections.length + 1}`,
        fields: [],
      };
      setTypeForm({
        ...typeForm,
        sections: [...typeForm.sections, newSection],
      });
      setSelectedSection(newSection);
    } else {
      // Adiciona um novo campo na seção específica e no índice indicado
      const newField = {
        id: `field-${Date.now()}`,
        label: 'New Field',
        fieldType: draggedElementType,
        config: {},
      };

      const updatedSections = [...typeForm.sections];
      const targetFields = [...updatedSections[sectionIndex].fields];

      if (fieldIndex === null) {
        // Adiciona ao final dos campos se fieldIndex é `null`
        targetFields.push(newField);
      } else {
        // Insere o campo no índice específico
        targetFields.splice(fieldIndex, 0, newField);
      }

      updatedSections[sectionIndex].fields = targetFields;

      setTypeForm({
        ...typeForm,
        sections: updatedSections,
      });
    }
  };

  const handleDelete = (indexS: number, fieldId?: number) => {
    const updatedSections = typeForm.sections.map((section) => ({
      ...section,
      fields: [...section.fields],
    }));

    if (fieldId === undefined) {
      const filteredSections = updatedSections.filter((_, index) => index !== indexS);
      setTypeForm({
        ...typeForm,
        sections: filteredSections,
      });
    } else {
      updatedSections[indexS].fields = updatedSections[indexS].fields.filter(
        (_, index) => index !== fieldId,
      );
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
          handleDelete={handleDelete}
        />
      </section>

      {/* TODO: sistema de adicionar steps */}
      <StepsForm />
    </section>
  );
};

export default FormPreview;
