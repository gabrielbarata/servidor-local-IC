
const try_async =
  (func, error) =>
  async (...args) => {
    try {
      return await func(...args);
    } catch {
      console.log("error");
      if (error) console.log(error);
      return { ...error };
    }
  };

  // export {try_async}
  module.exports={try_async}