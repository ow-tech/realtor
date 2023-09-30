const path = require("path");

module.exports = function override(config, env) {
  // Add the rule for CSS files

  config.module.rules.push({
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env", { modules: false }], // Use ES6 modules
          "@babel/preset-react",
        ],
      },
    },
    include: path.resolve(__dirname, "../src"),
  });

  // Add the optimization settings
  config.optimization = {
    usedExports: true, // Enable tree shaking
    minimize: true, // Enable minification
  };

  return config;
};
