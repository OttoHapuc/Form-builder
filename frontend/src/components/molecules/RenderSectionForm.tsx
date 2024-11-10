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
  onDragOver,
  onDragLeave,
  onDrop,
  indexS,
  handleDelete,
}: RenderSectionFormType) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [draggingOverIndex, setDraggingOverIndex] = useState<number | null>(null);

  return (
    <button
      key={section.id}
      className={clsx(
        selectedSection?.id === section.id
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
        <div className="flex flex-wrap">
          {section.fields.map((field, indexF) => (
            <button key={field.id} className="flex">
              {/* Área de Drop antes de cada campo */}
              <button
                onDragEnter={() => setDraggingOverIndex(indexF)}
                onDragOver={onDragOver}
                onDragLeave={() => setDraggingOverIndex(null)}
                onDrop={(e) => {
                  onDrop(e, indexS, indexF);
                  setDraggingOverIndex(null);
                  e.stopPropagation();
                }}
                className={clsx(
                  'border-dashed rounded-md min-w-[10px] min-h-full',
                  draggingOverIndex === indexF && 'w-32 border-2 border-gray-300',
                )}
              />
              {/* Campo atual */}
              <RenderInputForm
                input={field}
                setSelectedElement={setSelectedElement}
                selectedElement={selectedElement}
                handleDelete={handleDelete}
                indexS={indexS}
                indexF={indexF}
              />
            </button>
          ))}
          {/* Área de Drop no final da seção */}
          <button
            onDragEnter={() => setDraggingOverIndex(null)}
            onDragOver={onDragOver}
            onDragLeave={(e) => {setDraggingOverIndex(null); onDragLeave(e);}}
            onDrop={(e) => {
              onDrop(e, indexS, null);
              setDraggingOverIndex(null);
              e.stopPropagation();
            }}
            className={clsx(
              'border-dashed border-2 border-gray-300 rounded-md min-h-[40px]',
              section.fields.length === 0 && 'w-full',
              (section.fields.length !== 0 && draggingOverIndex === null) && 'w-32',
            )}
          />
        </div>
      )}
    </button>
  );
};

export default RenderSectionForm;
