export const getItemLayout = (
  itemHeight: number,
  numberOfColums: number = 1,
) => {
  return (data: any, index: number) => {
    return {
      length: itemHeight,
      offset: itemHeight * Math.floor(index / numberOfColums),
      index,
    };
  };
};
