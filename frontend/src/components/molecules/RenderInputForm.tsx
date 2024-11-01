import { RenderInputFormType } from '../../types/molecules/RenderInputFormType';

import Icon from '../atoms/icon';
import FormElementRender from './FormElementRender';

const RenderInputForm = ({
  input,
  selectedElement,
  setSelectedElement,
}: RenderInputFormType) => {
  return (
    <button
      key={input.id}
      className={`relative p-2 rounded-lg ${selectedElement?.id === input.id ? 'border-blue-500 bg-blue-50 border' : 'border-2 border-dotted border-gray-200'}`}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedElement(input);
      }}
    >
      <div className="absolute right-1 top-1 flex items-center mb-2 gap-3 justify-end">
        <div className="flex items-center gap-2">
          <Icon fontSize={7} IconName="TbGripHorizontal" className="text-gray-400" />
          <span className="text-xs font-medium">{input.fieldType}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            // onRemove(input.id);
          }}
          className="text-gray-400 hover:text-red-500"
        >
          <Icon fontSize={7} IconName="IoMdClose" className="w-4 h-4" />
        </button>
      </div>
      <FormElementRender element={input} />
    </button>
  );
};

export default RenderInputForm;
