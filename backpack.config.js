module.exports = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.ts'
    config.resolve = {
      extensions: ['.ts', '.js', '.json']
    }
    config.module.rules.push({
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    })
    return config
  }
}
