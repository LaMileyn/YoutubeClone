const { alias } = require("react-app-rewire-alias");


module.exports = function override(config,env){
    alias({
        "@components" : 'src/components',
        "@redux" : "src/redux",
        "@files" : "src/files/",
        "@firebase_auth" : "src/firebase",
        "@api" : "src/api",
        "@skeletones" : 'src/helpers/skeletones/'

    })(config);
    return config;
}