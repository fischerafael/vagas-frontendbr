export const flattenArrayOfArrayOfStrings = (
  arrayOfArrayOfStrings: string[][]
) => {
  const flattened = arrayOfArrayOfStrings.reduce((arr, current) => {
    return arr.concat(current);
  }, [] as string[]);

  return flattened;
};
