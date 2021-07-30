require("esbuild")
  .serve(
    {
      servedir: "demo",
    },
    {
      entryPoints: ["./src/index"],
      outdir: "demo/dist",
      bundle: true,
      format: "esm",
    }
  )
  .then(res => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
