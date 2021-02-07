export const TriangleArea = {
  name: 'Triangle Area',
  args: {
    area: {
      key: 'area',
      value: 0,
      method: ((args: { area: number, height: number, base: number }) => (args.height * args.base) / 2)
    },
    height: {
      key: 'height',
      value: 0,
      method: ((args: { area: number, height: number, base: number }) => args.height * 2 / args.base)
    },
    base: {
      key: 'base',
      value: 0
    }
  },
};
