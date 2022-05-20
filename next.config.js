module.exports = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    var obj = {};
    ["fs", "child_process", "path","stream"].forEach((v) => (obj[v] = false));
    config.resolve.fallback = obj;
    config.externals.push({ pug: { commonjs: "pug" } });
    config.plugins.push(
      {
          apply: (compiler) => {
              compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
                  console.log(".. Run after build")
              });
          }
      }    
  )
    return config;
  },
};
