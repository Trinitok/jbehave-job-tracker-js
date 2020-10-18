module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/jbehave-job-tracker-js/' : '/',
    devServer: {
        proxy: 'http://localhost:5000'
    }
}