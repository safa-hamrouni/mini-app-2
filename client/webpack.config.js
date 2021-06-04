const path = require("path");

module.exports = () => {
  const ENTRY_POINT = path.join(__dirname, "client", "src", "index.jsx");
  const DIST_FOLDER_PATH = path.join(__dirname, "client", "dist");

  return {
    entry: ENTRY_POINT,
    output: {
      path: DIST_FOLDER_PATH,
      filename: "bundle.js",
    },
    mode: process.env.NODE_ENV || "development",
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            "style-loader",
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                modules: true,
              },
            },
          ],
          include: /\.module\.css$/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
          exclude: /\.module\.css$/,
        },
      ],
    },
  };
};
