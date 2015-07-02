module.exports = function(grunt) {

  grunt.initConfig({
    'build-atom-shell': {
      tag: 'v0.28.3',
      nodeVersion: '0.18.0',
      buildDir: (process.env.TMPDIR || process.env.TEMP || '/tmp') + '/atom-shell',
      projectName: 'dsm',
      productName: 'DSM'
    }
  });

  grunt.loadNpmTasks('grunt-build-atom-shell');

  // grunt.registerTask('default', ['--help']);
};
