import { FormSectionType, FormFieldType } from '../simple-form';

export type FormDownPropsType = {
    sectionForm: FormSectionType[]
    setSectionForm: React.Dispatch<React.SetStateAction<FormSectionType[]>>
    selectedSection: FormSectionType | null
    setSelectedSection: React.Dispatch<React.SetStateAction<FormSectionType | null>>
    selectedElement: FormFieldType | null
    setSelectedElement: React.Dispatch<React.SetStateAction<FormFieldType | null>>
    onDrop: (_e: React.DragEvent, _sectionIndex: number, _fieldIndex: number | null) => void
    handleDelete: (_indexS: number, _fieldId?: number) => void
}