const path = require('path')

module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {loader: 'svg-sprite-loader'},
                'svgo-loader'
            ]
        })

        return config;
    }
}

//config svgo