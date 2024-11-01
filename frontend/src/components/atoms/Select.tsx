import { FormFieldType } from '../../types/simple-form';
import clsx from 'clsx';
import * as width from '../../constants/UI/width/index';

const Select = ({ id, label, value, config }: FormFieldType) => {
    return (
      <div className={clsx('flex flex-col items-start', width.widthParent)}>
    <label htmlFor={id}>{label}</label>
    <select
      id={id}
      value={String(value)}
      required={config.required}
      disabled={config.disabled}
      className={clsx('border border-solid border-slate-300 rounded-lg', config.size && width.widthElement[config.size],config.color, config.block ? 'block' : 'inline-block' )}
      onChange={(e) => config.onChange?.(e.target.value)}
    >
      {config.options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
    );
  };
  
  export default Select;