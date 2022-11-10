module.exports = (eleventyConfig) =>{
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/js');
    eleventyConfig.addPassthroughCopy('./src/css');
    eleventyConfig.addPassthroughCopy('./src/img');
    return{
        dir: {
            input: "src",
            output: "public"
        }
    }
}