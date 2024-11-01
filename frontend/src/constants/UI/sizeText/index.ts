const sizeClasses = {
  1: 'text-4xl sm:text-5xl',
  2: 'text-3xl sm:text-4xl',
  3: 'text-2xl sm:text-3xl',
  4: 'text-xl sm:text-2xl',
  5: 'text-lg sm:text-xl',
  6: 'text-base sm:text-lg',
  7: 'text-sm sm:text-base',
  8: 'text-xs sm:text-sm',
  9: 'text-xxs sm:text-xs',
};

export type SizeClassesType = keyof typeof sizeClasses;

export default sizeClasses;
