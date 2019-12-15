const path = require("path");
const webpack = require("webpack");
const webpackMerge = require("webpack-merge");
const ReactRefreshPlugin = require('@webhotelier/webpack-fast-refresh');
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports = ({ mode } = { mode: "production" }) => {
    console.log(`mode is: ${mode}`);

    return webpackMerge(
        {
            mode,
            entry: "./src/index.js",
            devServer: {
              contentBase: path.join(__dirname, "public/"),
              port: 3000,
              publicPath: "http://localhost:3000/dist/",
              historyApiFallback: true,
              hotOnly: true,
              watchContentBase: true,
              watchOptions: {
                poll: true
              },
              open: true
            },
            resolve: { extensions: ["*", ".js", ".jsx"] },
            output: {
              path: path.resolve(__dirname, "dist/"),
              publicPath: "/dist/",
              filename: "bundle.js"
            },
            module: {
                rules: [
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        loader: "babel-loader"
                    }
                ]
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin(),
                new ReactRefreshPlugin()
            ]
        },
        modeConfiguration(mode)
    );
};
