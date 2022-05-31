// Para saber dónde está ubicado el proyecto
const path = require("path");

//Para usar el plugin de HTMl -  se usa de nuevo en plugins
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  // Dónde esta el punto de entrada a la App?
  entry: "./src/index.js",
  //Dónde vive el proyecto una vez está listo?
  output: {
    //Acá le decimos que va a decir en la carpeta 'dist'queda el output
    path: path.resolve(__dirname, "dist"),
    //Nombre del paquete
    filename: "bundle.js",
    publicPath: "/",
  },
  //Indicar que es para modo desarrollo y evitar warning al hacer el build
  mode: "development",

  //Para definirle que extansiones buscar y que hacer con eso archivos
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@containers": path.resolve(__dirname, "./src/containers"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@routes": path.resolve(__dirname, "./src/Routes"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@logos": path.resolve(__dirname, "./src/assets/logos"),
      "@hooks": path.resolve(__dirname, "./src/hooks"),
    },
  },

  //Reglas que se crean con los loaders y los plugins
  module: {
    //vamos a trabajar con loader Babel y de Html
    rules: [
      //usamos REGEX para definir los elemnetos que vamos a trabajar
      {
        //BABEL-LOADER ->vamos a configurar para que detecte .js y .jsx
        test: /\.(js|jsx)$/,
        //Que no queremos que lea para ese loader
        exclude: /node_modules/,
        //Que vamos a hacer con lo que encuentre con el REGEX, que loaders usar?
        use: {
          loader: "babel-loader",
        },
      },
      {
        //HTML, definir REGEX para leer todos los archivos HTML
        test: /\.html$/,
        //definir loader a usar
        use: {
          loader: "html-loader",
        },
      },
      // CCS - Sass
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // Manejo imágenes
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: "asset",
      },
    ],
  },
  //Aca viene la seccion de Plugins
  plugins: [
    //HtmlWebpackPlugin
    new HtmlWebpackPlugin({
      //Que template de html debe usar?
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: path.join(__dirname, "dist"), //De donde debe leer
    compress: true, //para usar gzip]
    historyApiFallback: true, //usar historia
    port: 3006,
    historyApiFallback: true,
  },
};
