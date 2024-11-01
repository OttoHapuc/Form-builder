const borderRadius = {
    2: 'rounded-sm',
    6: 'rounded-md',
    8: 'rounded-lg',
    12: 'rounded-xl',
    16: 'rounded-2xl',
    24: 'rounded-3xl',
    'full': 'rounded-full',
  };
  
  export type borderRadiusType = keyof typeof borderRadius;
  
  export default borderRadius;
  