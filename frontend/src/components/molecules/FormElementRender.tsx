import { FormElementRenderPropsType } from '../../types/molecules/FormElementRenderPropsType';

import Checkbox from '../atoms/Checkbox';
import DateInput from '../atoms/Date';
import FileInput from '../atoms/File';
import InputNumber from '../atoms/InputNumber';
import InputText from '../atoms/InputText';
import Radio from '../atoms/Radio';
import Select from '../atoms/Select';
import Textarea from '../atoms/Textarea';

  const FormElementRender = ({ element }: FormElementRenderPropsType) => {
    switch (element.fieldType) {
      case 'text':
        return (
          <InputText
            id={element.id}
            fieldType={element.fieldType}
            label={element.label}
            value={String(element.value)}
            config={element.config}
          />
        );
  
      case 'number':
        return (
          <InputNumber
          id={element.id}
            fieldType={element.fieldType}
            label={element.label}
            value={String(element.value)}
            config={element.config}
          />
        );
  
      case 'date':
        return (
          <DateInput
          id={element.id}
            fieldType={element.fieldType}
            label={element.label}
            value={String(element.value)}
            config={element.config}
          />
        );
  
      case 'select':
        return (
          <Select
          id={element.id}
            fieldType={element.fieldType}
            label={element.label}
            value={String(element.value)}
            config={element.config}
          />
        );
  
      case 'checkbox':
        return (
          <Checkbox
          id={element.id}
          fieldType={element.fieldType}
          label={element.label}
          value={String(element.value)}
          config={element.config}
          />
        );
  
      case 'radio':
        return (
          <Radio
          id={element.id}
          fieldType={element.fieldType}
          label={element.label}
          value={String(element.value)}
          config={element.config}
          />
        );
  
      case 'textarea':
        return (
          <Textarea
          id={element.id}
          fieldType={element.fieldType}
          label={element.label}
          value={String(element.value)}
          config={element.config}
          />
        );
  
      case 'file':
        return (
          <FileInput
          id={element.id}
          fieldType={element.fieldType}
          label={element.label}
          value={String(element.value)}
          config={element.config}
          />
        );
  
      default:
        return null;
    }
  };
  
  export default FormElementRender;