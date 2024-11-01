import { BsFillCloudUploadFill, BsGraphUp, BsShop } from 'react-icons/bs';
import { FaMoneyBillTransfer, FaRegFile, FaUsersViewfinder } from 'react-icons/fa6';
import { GiCash, GiSpellBook } from 'react-icons/gi';
import {
  AiOutlineMessage,
  AiOutlineRight,
  AiOutlineSearch,
  AiOutlineUser,
} from 'react-icons/ai';
import {
  IoEyeOutline,
  IoMenu,
  IoNotificationsOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { IoIosAddCircleOutline, IoIosArrowDown, IoMdArrowDropright, IoMdCheckboxOutline, IoMdClose, IoMdRadioButtonOn } from "react-icons/io";
import { LuLaptop } from 'react-icons/lu';
import { PiPencilLineLight, PiUsersThree } from 'react-icons/pi';
import { RiBook2Line } from 'react-icons/ri';
import { SlOptionsVertical } from 'react-icons/sl';
import { TbGripHorizontal, TbNewSection, TbUserPlus } from 'react-icons/tb';
import { CgClose, CgMenuGridO } from 'react-icons/cg';
import { LiaAddressCardSolid, LiaEyeSlashSolid, LiaEyeSolid, LiaFileContractSolid } from 'react-icons/lia';
import { GoMultiSelect, GoNoEntry, GoNumber, GoPlusCircle } from 'react-icons/go';
import { ImTextWidth } from "react-icons/im";
import {
  FaSchool,
  FaClipboardList,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaBook,
  FaClipboard,
  FaBookOpen,
  FaLayerGroup,
  FaCogs,
  FaBalanceScale,
  FaUserTie,
  FaUserEdit,
  FaChalkboard,
  FaDoorOpen,
  FaListAlt,
  FaCog,
  FaCalendarAlt,
  FaFileAlt,
  FaFolderOpen,
  FaPencilAlt,
  FaCalendarCheck,
  FaChartBar,
  FaKey,
  FaCamera,
  FaLockOpen,
  FaClock,
  FaCalendarDay,
  FaTimesCircle,
  FaSyncAlt,
  FaClipboardCheck,
  FaExclamationCircle,
  FaMapMarkerAlt,
  FaUserFriends,
  FaCalculator,
  FaBriefcase,
  FaWalking,
  FaPaperclip,
  FaCheckCircle,
  FaFileExport,
  FaFileUpload,
  FaExclamationTriangle,
  FaCommentDots,
  FaStickyNote,
  FaSync,
  FaPaperPlane,
  FaChartLine,
  FaBell,
  FaUnlock,
  FaBarcode,
  FaShareAlt,
  FaSort,
  FaEnvelope,
  FaUnlockAlt,
  FaUserCheck,
  FaLink,
  FaExchangeAlt,
  FaStar,
  FaComments,
} from 'react-icons/fa';
import {
  MdSchool,
  MdClass,
  MdLayers,
  MdSettings,
  MdPerson,
  MdPersonAdd,
  MdOutlineKeyboardDoubleArrowRight,
} from 'react-icons/md';

const Icons = {
  GiSpellBook: {
    name: 'GiSpellBook',
    element: <GiSpellBook />,
  },
  PiPencilLineLight: {
    name: 'PiPencilLineLight',
    element: <PiPencilLineLight />,
  },
  IoSettingsOutline: {
    name: 'IoSettingsOutline',
    element: <IoSettingsOutline />,
  },
  LuLaptop: {
    name: 'LuLaptop',
    element: <LuLaptop />,
  },
  TbUserPlus: {
    name: 'TbUserPlus',
    element: <TbUserPlus />,
  },
  FaUsersViewfinder: {
    name: 'FaUsersViewfinder',
    element: <FaUsersViewfinder />,
  },
  IoEyeOutline: {
    name: 'IoEyeOutline',
    element: <IoEyeOutline />,
  },
  RiBook2Line: {
    name: 'RiBook2Line',
    element: <RiBook2Line />,
  },
  BsGraphUp: {
    name: 'BsGraphUp',
    element: <BsGraphUp />,
  },
  BsShop: {
    name: 'BsShop',
    element: <BsShop />,
  },
  PiUsersThree: {
    name: 'PiUserThree',
    element: <PiUsersThree />,
  },
  FaMoneyBillTransfer: {
    name: 'FaMoneyBillTransfer',
    element: <FaMoneyBillTransfer />,
  },
  AiOutlineUser: {
    name: 'AiOutlineUser',
    element: <AiOutlineUser />,
  },
  AiOutlineMessage: {
    name: 'AiOutlineMessage',
    element: <AiOutlineMessage />,
  },
  IoNotificationsOutline: {
    name: 'IoNotificationsOutline',
    element: <IoNotificationsOutline />,
  },
  SlOptionsVertical: {
    name: 'SlOptionsVertical',
    element: <SlOptionsVertical />,
  },
  AiOutlineSearch: {
    name: 'AiOutlineSearch',
    element: <AiOutlineSearch />,
  },
  AiOutlineRight: {
    name: 'AiOutlineRight',
    element: <AiOutlineRight />,
  },
  IoMenu: {
    name: 'IoMenu',
    element: <IoMenu />,
  },
  CgMenuGridO: {
    name: 'CgMenuGridO',
    element: <CgMenuGridO />,
  },
  LiaEyeSolid: {
    name: 'LiaEyeSolid',
    element: <LiaEyeSolid />,
  },
  LiaEyeSlashSolid: {
    name: 'LiaEyeSlashSolid',
    element: <LiaEyeSlashSolid />,
  },
  GoPlusCircle: {
    name: 'GoPlusCircle',
    element: <GoPlusCircle />,
  },
  GoNoEntry: {
    name: 'GoNoEntry',
    element: <GoNoEntry />,
  },
  CgClose: {
    name: 'CgClose',
    element: <CgClose />,
  },

  FaSchool: {
    name: 'FaSchool',
    element: <FaSchool />,
  },
  FaClipboardList: {
    name: 'FaClipboardList',
    element: <FaClipboardList />,
  },
  FaChalkboardTeacher: {
    name: 'FaChalkboardTeacher',
    element: <FaChalkboardTeacher />,
  },
  FaGraduationCap: {
    name: 'FaGraduationCap',
    element: <FaGraduationCap />,
  },
  FaBook: {
    name: 'FaBook',
    element: <FaBook />,
  },
  FaClipboard: {
    name: 'FaClipboard',
    element: <FaClipboard />,
  },
  FaBookOpen: {
    name: 'FaBookOpen',
    element: <FaBookOpen />,
  },
  FaLayerGroup: {
    name: 'FaLayerGroup',
    element: <FaLayerGroup />,
  },
  FaCogs: {
    name: 'FaCogs',
    element: <FaCogs />,
  },
  FaBalanceScale: {
    name: 'FaBalanceScale',
    element: <FaBalanceScale />,
  },
  FaUserTie: {
    name: 'FaUserTie',
    element: <FaUserTie />,
  },
  FaUserEdit: {
    name: 'FaUserEdit',
    element: <FaUserEdit />,
  },
  MdSchool: {
    name: 'MdSchool',
    element: <MdSchool />,
  },
  MdClass: {
    name: 'MdClass',
    element: <MdClass />,
  },
  MdLayers: {
    name: 'MdLayers',
    element: <MdLayers />,
  },
  MdSettings: {
    name: 'MdSettings',
    element: <MdSettings />,
  },
  MdPerson: {
    name: 'MdPerson',
    element: <MdPerson />,
  },
  MdPersonAdd: {
    name: 'MdPersonAdd',
    element: <MdPersonAdd />,
  },
  FaChalkboard: {
    name: 'FaChalkboard',
    element: <FaChalkboard />,
  },
  FaDoorOpen: {
    name: 'FaDoorOpen',
    element: <FaDoorOpen />,
  },
  FaListAlt: {
    name: 'FaListAlt',
    element: <FaListAlt />,
  },
  FaCog: {
    name: 'FaCog',
    element: <FaCog />,
  },
  FaCalendarAlt: {
    name: 'FaCalendarAlt',
    element: <FaCalendarAlt />,
  },
  FaFileAlt: {
    name: 'FaFileAlt',
    element: <FaFileAlt />,
  },
  FaFolderOpen: {
    name: 'FaFolderOpen',
    element: <FaFolderOpen />,
  },
  FaPencilAlt: {
    name: 'FaPencilAlt',
    element: <FaPencilAlt />,
  },
  FaCalendarCheck: {
    name: 'FaCalendarCheck',
    element: <FaCalendarCheck />,
  },
  FaChartBar: {
    name: 'FaChartBar',
    element: <FaChartBar />,
  },
  FaKey: {
    name: 'FaKey',
    element: <FaKey />,
  },
  FaCamera: {
    name: 'FaCamera',
    element: <FaCamera />,
  },
  FaLockOpen: {
    name: 'FaLockOpen',
    element: <FaLockOpen />,
  },
  FaClock: {
    name: 'FaClock',
    element: <FaClock />,
  },
  FaCalendarDay: {
    name: 'FaCalendarDay',
    element: <FaCalendarDay />,
  },
  FaTimesCircle: {
    name: 'FaTimesCircle',
    element: <FaTimesCircle />,
  },
  FaSyncAlt: {
    name: 'FaSyncAlt',
    element: <FaSyncAlt />,
  },
  FaClipboardCheck: {
    name: 'FaClipboardCheck',
    element: <FaClipboardCheck />,
  },
  FaExclamationCircle: {
    name: 'FaExclamationCircle',
    element: <FaExclamationCircle />,
  },
  FaMapMarkerAlt: {
    name: 'FaMapMarkerAlt',
    element: <FaMapMarkerAlt />,
  },
  FaUserFriends: {
    name: 'FaUserFriends',
    element: <FaUserFriends />,
  },
  FaCalculator: {
    name: 'FaCalculator',
    element: <FaCalculator />,
  },
  FaBriefcase: {
    name: 'FaBriefcase',
    element: <FaBriefcase />,
  },
  FaWalking: {
    name: 'FaWalking',
    element: <FaWalking />,
  },
  FaPaperclip: {
    name: 'FaPaperclip',
    element: <FaPaperclip />,
  },
  FaCheckCircle: {
    name: 'FaCheckCircle',
    element: <FaCheckCircle />,
  },
  FaFileExport: {
    name: 'FaFileExport',
    element: <FaFileExport />,
  },
  FaFileUpload: {
    name: 'FaFileUpload',
    element: <FaFileUpload />,
  },
  FaExclamationTriangle: {
    name: 'FaExclamationTriangle',
    element: <FaExclamationTriangle />,
  },
  FaCommentDots: {
    name: 'FaCommentDots',
    element: <FaCommentDots />,
  },
  FaStickyNote: {
    name: 'FaStickyNote',
    element: <FaStickyNote />,
  },
  FaSync: {
    name: 'FaSync',
    element: <FaSync />,
  },
  FaPaperPlane: {
    name: 'FaPaperPlane',
    element: <FaPaperPlane />,
  },
  FaChartLine: {
    name: 'FaChartLine',
    element: <FaChartLine />,
  },
  FaBell: {
    name: 'FaBell',
    element: <FaBell />,
  },
  FaUnlock: {
    name: 'FaUnlock',
    element: <FaUnlock />,
  },
  FaBarcode: {
    name: 'FaBarcode',
    element: <FaBarcode />,
  },
  FaShareAlt: {
    name: 'FaShareAlt',
    element: <FaShareAlt />,
  },
  FaSort: {
    name: 'FaSort',
    element: <FaSort />,
  },
  FaEnvelope: {
    name: 'FaEnvelope',
    element: <FaEnvelope />,
  },
  FaUnlockAlt: {
    name: 'FaUnlockAlt',
    element: <FaUnlockAlt />,
  },
  FaUserCheck: {
    name: 'FaUserCheck',
    element: <FaUserCheck />,
  },
  FaLink: {
    name: 'FaLink',
    element: <FaLink />,
  },
  FaExchangeAlt: {
    name: 'FaExchangeAlt',
    element: <FaExchangeAlt />,
  },
  FaStar: {
    name: 'FaStar',
    element: <FaStar />,
  },
  FaComments: {
    name: 'FaComments',
    element: <FaComments />,
  },
  ImTextWidth:{
    name: 'ImTextWidth',
    element: <ImTextWidth/>
  },
  TbNewSection: {
    name: 'TbNewSection',
    element: <TbNewSection />
  },
  GoNumber: {
    name: 'GoNumber',
    element: <GoNumber />
  },
  GoMultiSelect:{
    name: 'GoMultiSelect',
    element: <GoMultiSelect/>
  },
  IoMdCheckboxOutline:{
    name: 'IoMdCheckboxOutline',
    element: <IoMdCheckboxOutline/>
  },
  IoMdRadioButtonOn:{
    name: 'IoMdRadioButtonOn',
    element: <IoMdRadioButtonOn/>
  },
  FaRegFile: {
    name: 'FaRegFile',
    element: <FaRegFile />
  },
  MdOutlineKeyboardDoubleArrowRight:{
    name: 'MdOutlineKeyboardDoubleArrowRight',
    element: <MdOutlineKeyboardDoubleArrowRight/>
  },
  IoIosAddCircleOutline: {
    name: 'IoIosAddCircleOutline',
    element: <IoIosAddCircleOutline />
  },
  LiaAddressCardSolid: {
    name: 'LiaAddressCardSolid',
    element: <LiaAddressCardSolid />
  },
  GiCash:{
    name: 'GiCash',
    element: <GiCash/>
  },
  IoMdArrowDropright:{
    name: 'IoMdArrowDropright',
    element: <IoMdArrowDropright/>
  },
  TbGripHorizontal: {
    name: 'TbGripHorizontal',
    element: <TbGripHorizontal />
  },
  IoMdClose: {
    name: 'IoMdClose',
    element: <IoMdClose />
  },
  IoIosArrowDown: {
    name: 'IoIosArrowDown',
    element: <IoIosArrowDown />
  },
  LiaFileContractSolid:{
    name: 'LiaFileContractSolid',
    element: <LiaFileContractSolid />
  },
  BsFillCloudUploadFill:{
    name: 'BsFillCloudUploadFill',
    element: <BsFillCloudUploadFill />
  }
};

export type IconNameType = keyof typeof Icons;

export default Icons;
