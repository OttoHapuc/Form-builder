import clsx from 'clsx';
import sizeClasses from '../../constants/UI/sizeText/index';
import Icons from '../../utils/icons/index';
import { IconType } from '../../types/atoms/IconPropsType';
import { HiOutlineHashtag } from "react-icons/hi";

const Icon = ({ IconName, fontSize, className }: IconType) => {
    const Icon = IconName && Icons[IconName] ? Icons[IconName].element : <HiOutlineHashtag />;
  
    return <picture className={clsx(sizeClasses[fontSize], className)}>{Icon}</picture>;
  };

  export default Icon;
