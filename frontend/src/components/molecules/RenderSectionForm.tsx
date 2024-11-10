import { useState } from 'react';
import clsx from 'clsx';

import { RenderSectionFormType } from '../../types/molecules/RenderSectionFormType';

import Icon from '../atoms/icon';
import RenderInputForm from './RenderInputForm';

const RenderSectionForm = ({
  section,
  selectedElement,
  setSelectedElement,
  selectedSection,
  setSelectedSection,
  onDragLeave,
  onDragOver,
  onDrop,
  indexS,
  handleDelete
}: RenderSectionFormType) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  return (
    <button
      key={section.title}
      className={clsx(
        selectedSection?.title === section.title
          ? 'border-blue-500 bg-blue-50'
          : 'border-gray-200',
        'w-full p-4 rounded-lg border border-gray-200',
      )}
      onClick={() => setSelectedSection(section)}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon fontSize={5} IconName="TbGripHorizontal" className="text-gray-400" />
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsCollapsed(!isCollapsed);
            }}
            className={clsx(
              'text-gray-400 hover:text-gray-600 transition-transform duration-300',
              isCollapsed && '-rotate-90',
            )}
          >
            <Icon fontSize={5} IconName="IoIosArrowDown" />
          </button>
          <span className="text-sm font-medium">{section.title}</span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleDelete(indexS);
          }}
          className="text-gray-400 hover:text-red-500"
        >
          <Icon fontSize={5} IconName="IoMdClose" className="w-4 h-4" />
        </button>
      </div>
      {!isCollapsed && (
        <div className="flex gap-4">
          <button
            className={clsx("w-full min-h-[50px] rounded-lg transition-colors", section.fields.length === 0 && 'border-2 border-dashed border-gray-300 p-1')}
            onDragOver={onDragOver}
            onDragLeave={onDragLeave}
            onDrop={(e) => {
              onDrop(e, indexS);
              e.stopPropagation();
            }}
          >
            {section.fields.length > 0 ? (
              <div className="flex flex-wrap">
                {section.fields.map((field, indexF) => (
                  <RenderInputForm
                    key={field.id}
                    input={field}
                    setSelectedElement={setSelectedElement}
                    selectedElement={selectedElement}
                    handleDelete={handleDelete}
                    indexS={indexS}
                    indexF={indexF}
                  />
                ))}
              </div>
            ) : (
              <div className="w-full flex">
                  <p className="text-gray-500 py-2">
                    Drag and drop element Section here!!
                  </p>
              </div>
            )}
          </button>
        </div>
      )}
    </button>
  );
};

export default RenderSectionForm;
