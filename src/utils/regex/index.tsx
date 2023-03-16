export const emailRegex = (string: string) => {
  return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(string);
};
