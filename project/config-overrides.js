const { alias } = require("react-app-rewire-alias");


module.exports = function override(config,env){
    alias({
        "@components" : 'src/components',
        "@redux" : "src/redux"

    })(config);
    return config
}