const path = require('path')

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
        })

        return config;
    }
}

//config svgo