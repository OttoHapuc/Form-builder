import React from 'react';
import { ElementHeaderPropsType } from '../../types/organisms/ElementHeaderPropsType';
import Icon from '../atoms/icon';

const ElementHeader = ({ elements }: ElementHeaderPropsType) => {
  const handleDragStart = (e: React.DragEvent, type: string) => {
    e.dataTransfer.setData('formElementType', type);
  };

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-center h-16 gap-6">
          {elements.map(({ type, icon, label }) => (
            <button
              key={type}
              draggable
              onDragStart={(e) => handleDragStart(e, type)}
              className="flex items-center justify-center w-10 h-10 rounded-lg cursor-move hover:bg-gray-50 transition-colors group relative border hover:shadow-lg"
              title={label}
            >
              <Icon IconName={icon} fontSize={5} key={label} className="text-gray-600 group-hover:text-gray-900" />
              <span className="sr-only">{label}</span>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {label}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ElementHeader;
