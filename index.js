const { minify } = require("terser");

var code = {
    "file1.js": "console.log('test');"
};
var options = {
  mangle: {
	properties: {
	  nth_identifier: {
		get: n => {
		  return 'prefix_'+n.toString()
		}
	  }
	}
  }
};
minify(code, options)