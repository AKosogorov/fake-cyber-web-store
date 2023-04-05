;(async () => {
  try {
    const { execa } = await import('execa')

    console.log('checkout master...')
    await execa('git', ['checkout', 'master'])
    console.log('pull origin master...')
    await execa('git', ['pull', 'origin', 'master'])
    await execa('git', ['checkout', '--orphan', 'gh-pages'])
    console.log('Building...')
    await execa('npm', ['run', 'build'])

    const folderName = 'dist'
    await execa('git', ['--work-tree', folderName, 'add', '--all'])
    await execa('git', ['--work-tree', folderName, 'commit', '-m', 'gh-pages'])
    console.log('Pushing to gh-pages...')
    await execa('git', ['push', 'origin', 'HEAD:gh-pages', '--force'])
    // await execa('rm', ['-r', folderName])
    await execa('git', ['checkout', '-f', 'master'])
    await execa('git', ['branch', '-D', 'gh-pages'])
    console.log('Successfully deployed')
  } catch (e) {
    console.log(e.message)
    process.exit(1)
  }
})()
