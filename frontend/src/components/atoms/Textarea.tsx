import clsx from 'clsx';
import { FormFieldType } from '../../types/simple-form';
import * as width from '../../constants/UI/width/index';

const Textarea = ({ id, label, value, config }: FormFieldType) => {
    return (
      <div>
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      value={String(value)}
      placeholder={config.placeholder}
      required={config.required}
      readOnly={config.readOnly}
      disabled={config.disabled}
      maxLength={config.maxLength}
      className={clsx(config.size && width.widthElement[config.size],config.color, config.block ? 'block' : 'inline-block' )}
      onChange={(e) => config.onChange?.(e.target.value)}
    />
  </div>
    );
  };
  
  export default Textarea;