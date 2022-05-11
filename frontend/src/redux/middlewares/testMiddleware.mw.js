const test = () => (next) => (action) => {
  next(action);
};

export default test;
