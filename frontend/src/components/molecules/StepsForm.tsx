import Icon from '../atoms/icon';
const StepsForm = () => {
  return (
    <section className="min-w-48 p-3 rounded-lg border bg-white/35 border-gray-200 space-y-2 shadow-lg">
      <div className='flex items-center'>
        <Icon fontSize={5} IconName='IoMdArrowDropright'/>
        <button className="w-full flex items-center gap-2 border-2 shadow-md border-blue-300 text-blue-500 px-4 py-2 rounded-lg bg-blue-200">
          <Icon fontSize={3} IconName="LiaAddressCardSolid" className=''/> <span className='font-semibold'>New Step</span>
        </button>
      </div>
      <div className='flex items-center'>
      <button className="w-full flex items-center gap-2 border-2 border-rose-300 text-rose-500 opacity-45 hover:opacity-100 hover:shadow-md px-4 py-2 rounded-lg bg-rose-200">
        <Icon fontSize={3} IconName="GiCash" className=''/> <span className='font-semibold'>New Step</span>
      </button>
      </div>
      <button className="w-full flex items-center gap-2 border-2 border-dashed border-gray-300 px-4 py-2 rounded-lg hover:bg-white hover:shadow-md">
        <Icon fontSize={3} IconName="IoIosAddCircleOutline" /> <span>add Step</span>
      </button>
    </section>
  );
};

export default StepsForm;
