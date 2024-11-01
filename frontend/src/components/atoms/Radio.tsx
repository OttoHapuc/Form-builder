import clsx from 'clsx';
import { FormFieldType } from '../../types/simple-form';

const Radio = ({ id, label, value, config }: FormFieldType) => {
    return (
      <div className={clsx('flex flex-col items-start pt-3')}>
    <label htmlFor={id}>
      <input
        type="radio"
        id={id}
        checked={Boolean(value)}
        disabled={config.disabled}
        onChange={(e) => config.onChange?.(e.target.checked)}
      className={clsx('mr-2', config.block ? 'block' : 'inline-block' )}
      />
      {label}
    </label>
  </div>
    );
  };
  
  export default Radio;