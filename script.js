const HTML5ToPDF = require("html5-to-pdf")
const path = require("path")
 
const run = async () => {
  const html5ToPDF = new HTML5ToPDF({
    inputPath: path.join(__dirname, "assets", "resume.html"),
    outputPath: path.join(__dirname, "tmp", "resume.pdf"),
    include: [
      path.join(__dirname, "assets", "resume.css"),
    ],
  })
 
  await html5ToPDF.start()
  await html5ToPDF.build()
  await html5ToPDF.close()
}
 
(async () => {
  try {
    await run()
    console.log("DONE")
  } catch (error) {
    console.error(error)
    process.exitCode = 1
  } finally {
    process.exit();
  }
})()
 