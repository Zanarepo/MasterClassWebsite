module.exports = {
  // Other webpack configurations
  ignoreWarnings: [
    {
      module: /html2pdf\.js/,
      message: /Failed to parse source map/,
    },
  ],
};
