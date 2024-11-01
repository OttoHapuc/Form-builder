const baseWidths = {
  sm: 56,  // 56px (w-14)
  md: 80,  // 80px (w-20)
  lg: 160, // 160px (w-40)
  xl: 320, // 320px (w-80)
  '2xl': 384, // 384px (w-96)
  full: '100%', // largura total
} as const;

type WidthKey = keyof typeof baseWidths;

const createWidthClasses = (adjustment: number) => {
  return Object.fromEntries(
    Object.entries(baseWidths).map(([key, value]) => [
      key,
      typeof value === 'number' ? `w-${(value + adjustment) / 4}` : 'w-full',
    ])
  ) as Record<WidthKey, string>;
};

const widthElement = createWidthClasses(0); // largura original
const widthParent = createWidthClasses(8); // largura + 8px

export type WidthElementType = WidthKey;
export { widthElement, widthParent };