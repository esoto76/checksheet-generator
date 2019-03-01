var Pkg = require("./package.json");
process.env.VUE_APP_VERSION = Pkg.version;

var PKG_NAME = Pkg.name.replace("-", " ").replace(/\w\S*/g, function(txt) {
  return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
});

module.exports = {
  configureWebpack: config => {
    config.entry = {
      [Pkg.displayName + "-v" + Pkg.version]: "./src/main.js"
    };
  },

  productionSourceMap: false,

  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = PKG_NAME + " v" + Pkg.version;
      return args;
    });
  },

  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "com.es.esvElectron",
        productName: "ESV Electron",
        copyright: "Copyright © 2019 ${author}",
        win: {
          icon: "public/icon.png"
          /*publish: {
            provider: "github",
            token: "4bd7b9f95d20076a73816036fd42464a70791f85",
            releaseType: "release"
          }*/
        }
      }
    }
  }
};
