export const removeDuplicates = (arrayOfStrings: string[]) => {
  const withouDups = arrayOfStrings.reduce((noDups, current) => {
    if (noDups && noDups.includes(current)) return [...noDups];
    return [...noDups, current];
  }, [] as string[]);

  return withouDups;
};
