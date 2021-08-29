const esbuild = require("esbuild");
const alias = require("esbuild-plugin-alias");

esbuild
  .serve(
    {
      servedir: ".",
    },
    {
      entryPoints: ["./index"],
      outfile: "./out.js",
      bundle: true,
      format: 'esm',
      plugins: [
        alias({
          vdom: require("path").join(__dirname, "..", "src", "index.js"),
        }),
      ],
    }
  )
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
