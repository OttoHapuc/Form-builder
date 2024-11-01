import clsx from 'clsx';
import { FormFieldType } from '../../types/simple-form';
import * as width from '../../constants/UI/width/index';

const InputNumber = ({ id, label, value, config }: FormFieldType) => {
    return (
      <div className={clsx('flex flex-col items-start', width.widthParent)}>
    <label htmlFor={id}>{label}</label>
    <input
      type="number"
      id={id}
      value={String(value)}
      placeholder={config.placeholder}
      required={config.required}
      readOnly={config.readOnly}
      disabled={config.disabled}
      className={clsx('border border-solid border-slate-300 rounded-lg', config.size && width.widthElement[config.size],config.color, config.block ? 'block' : 'inline-block' )}
      onChange={(e) => config.onChange?.(e.target.value)}
    />
  </div>
    );
  };
  
  export default InputNumber;