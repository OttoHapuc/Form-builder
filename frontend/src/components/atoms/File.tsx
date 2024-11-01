import { FormFieldType } from '../../types/simple-form';
import * as width from '../../constants/UI/width/index';
import clsx from 'clsx';
import Icon from './icon';

const FileInput = ({ id, label, config }: FormFieldType) => {
    return (
      <div className={clsx('flex flex-col items-center justify-center p-2 pb-0 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow', width.widthParent)}>
      <label htmlFor={id} className="text-xs font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <div className="flex items-center justify-center w-8 h-8 bg-blue-100 text-blue-500 rounded-full mb-3">
    <Icon fontSize={5} IconName='BsFillCloudUploadFill' />
       </div>
    <input
      type="file"
      id={id}
      required={config.required}
      disabled={config.disabled}
      className={clsx('sr-only', config.size && width.widthElement[config.size],config.color, config.block ? 'block' : 'inline-block' )}
      onChange={(e) => config.onChange?.(e.target.files ? e.target.files[0] : null)}
    />
  </div>
    );
  };
  
  export default FileInput;