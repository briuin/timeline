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

  defaultConfig.entry = {
    app: "./src/briuin-timeline.js",
    store: "./src/store.js"
  };

  defaultConfig.output.filename = "[name].js";
  defaultConfig.output.path = path.resolve(process.cwd(), "docs");

  const rxjsExternals = {
    externals: [/^rxjs\/?.*$/]
  };

  return webpackMerge.smart(defaultConfig, rxjsExternals, {
    // customizations go here
  });
};
