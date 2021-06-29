export const generateId = (name = "client") => {
  return { id: `${name}-${(Math.random() * 1000).toFixed(0)}` };
};
