import Icon from '../atoms/icon';

const NavModulesMap = () => {
    return <section className="">
    <div
      className="w-[450px] base flex flex-wrap gap-2 items-center h-12 px-4 rounded-full"
      style={{ boxShadow: 'inset 0 0 5px rgba(0, 0, 0, 0.349)' }}
    >
      <div
        className={`flex gap-2 items-center rounded-full button p-1 px-4 shadow-lg`}
      >
        <span>modulo</span>
      </div>
      <Icon fontSize={6} IconName="MdOutlineKeyboardDoubleArrowRight"/>
      <div
        className={`flex gap-2 items-center rounded-full button p-1 px-4 shadow-lg`}
      >
        <span>sub modulo</span>
      </div>
      <Icon fontSize={6} IconName="MdOutlineKeyboardDoubleArrowRight"/>
      <div
        className={`flex gap-2 items-center rounded-full button p-1 px-4 shadow-lg`}
      >
        <span>sub-submodulo</span>
      </div>
    </div>
  </section>
}

export default NavModulesMap;