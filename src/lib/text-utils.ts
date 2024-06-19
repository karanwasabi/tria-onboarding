export const textUtils = {
  toSafeTitleCase: (string: string) => {
    if (!string) {
      return ``;
    } else {
      return string
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    }
  },
};
