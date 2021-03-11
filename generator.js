module.exports = (api, options) => {
  api.render('./template', {
      ...options,
      name: api.rootOptions.projectName
  })

  api.extendPackage({
    dependencies: {
      '@baldeweg/components': '^5.2.1',
      'vue-meta': '^2.4.0',
      'js-cookie': '^2.2.1',
      'axios': '^0.21.1'
    },
    author: options.author +' <'+ options.mail +'>',
    license: options.license,
    scripts: {
      watch: 'vue-cli-service serve'
    },
  })

  api.injectImports(api.entryFile, `import meta from './meta'`)
  api.injectRootOptions(api.entryFile, `meta,`)

  api.injectImports(api.entryFile, `import components from './components'`)
  api.injectRootOptions(api.entryFile, `components,`)

  api.injectImports(api.entryFile, `import './theme.css'`)

  api.exitLog('Add missing details to `vue.config.js`.', 'info')
  api.exitLog('Make `bin/setup` executable.', 'info')
  api.exitLog('Initialize a new git repo. Review and commit the files.', 'info')
  api.exitLog('Find out more about OpenSource licenses at https://opensource.org/licenses .', 'info')
}
