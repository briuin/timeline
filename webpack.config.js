const webpackMerge = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "briuin",
    projectName: "timeline",
    webpackConfigEnv
  });

  defaultConfig.output.filename = "app.js";
  defaultConfig.output.path = path.resolve(process.cwd(), "docs");

  defaultConfig.plugins.push(
    new CopyPlugin([{ from: "src/store.js", to: "store.js" }])
  );

  const rxjsExternals = {
    externals: [/^rxjs\/?.*$/]
  };

  return webpackMerge.smart(defaultConfig, rxjsExternals, {
    // customizations go here
  });
};
