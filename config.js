var ENV = process.env;

var settings = {
	mode: valueOrDefault(ENV["NODE_ENV"], 'development'),
	forceDownload: valueOrDefault(ENV["ZGVIDEO_FORCE_DOWNLOAD"]),
	random: valueOrDefault(ENV["ZGVIDEO_RANDOM"], false),
	rootFolder: valueOrDefault(ENV["ZGVIDEO_ROOT_FOLDER"], 'videos'),
	rootPath: valueOrDefault(ENV["process.env.ZGVIDEO_ROOT_PATH"], ''),
	server: valueOrDefault(ENV["SERVER"], 'ZGVideoService'),
	maxAge: valueOrDefault(ENV["process.env.ZGVIDEO_MAX_AGE"], 3600),
	throttle: valueOrDefault(ENV["process.env.ZGVIDEO_THROTTLE"], false)
};


function valueOrDefault(key, defaultValue) {
	return key != undefined ? key : defaultValue;
}

module.exports = settings;