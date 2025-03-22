if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn('ERROR: Please use pnpm to install this package')
  process.exit(1)
}
