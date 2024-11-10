import { FormDownPropsType } from '../../types/molecules/FormDownPropsType';

import RenderSectionForm from '../molecules/RenderSectionForm';

const FormDown = ({
  sectionForm,
  selectedElement,
  setSelectedElement,
  selectedSection,
  setSelectedSection,
  onDrop,
  handleDelete
}: FormDownPropsType) => {

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-blue-50');
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('bg-blue-50');
  };

  return (
    <button
      className="h-[600px] p-2 pr-1 rounded-lg border bg-white border-gray-200 space-y-3 shadow-lg flex flex-col items-center cursor-default"
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={(e) => {
        onDrop(e, -1);
        e.stopPropagation();
      }}
    >
      {sectionForm.length === 0 ? (
        <div className='w-full flex'>
          <div className="flex-1 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center px-4 m-4 mr-5">
            <p className="text-gray-500 py-5">Drag and drop element Section here!!</p>
          </div>
        </div>
      ) : (
        <div className="w-full h-full pr-2 overflow-y-auto space-y-4">
          {sectionForm.map((section, indexS) => (
            <RenderSectionForm
              key={section.title}
              section={section}
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
              selectedSection={selectedSection}
              setSelectedSection={setSelectedSection}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={onDrop}
              indexS={indexS}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </button>
  );
};

export default FormDown;
