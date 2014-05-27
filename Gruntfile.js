module.exports = function(grunt) {
    grunt.initConfig({
        'pkg': grunt.file.readJSON('package.json'),

        // CSS编译
        // 'sass': {
        //     'options': {
        //         'style': 'expanded'
        //     },
        //     'css': {
        //         'files': [{
        //             'expand': true,
        //             'cwd': 'src/scss/',
        //             'src': '**/*.scss',
        //             'dest': 'dist/css/',
        //             'ext': '.css'
        //         }]
        //     }
        // },
        // 拷贝
        'copy': {
            'css': {
                'files': [{
                    'expand': true,
                    'cwd': 'src/css/',
                    'src': ['**'],
                    'dest': 'dist/css/'
                }]
            },
            'img': {
                'files': [{
                    'expand': true,
                    'cwd': 'src/img/',
                    'src': ['**'],
                    'dest': 'dist/img/'
                }]
            },
            'html': {
                'files': [{
                    'expand': true,
                    'cwd': 'src/html/',
                    'src': ['**'],
                    'dest': 'dist/html/'
                }]
            }
        },
        // 清理
        'clean': {
            'css': ["dist/css"],
            'img': ["dist/img"],
            'html': ["dist/html"]
        }

    });

    // 加载已安装的任务脚本
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
    // 加载自定义任务脚本
   // grunt.loadTasks('./tools/task');

    grunt.registerTask('default', '默认任务', function() {
        console.log('支持命令列表:');
        console.log();
        console.log('    1、执行所有任务[js、css、img');
        console.log('    grunt all');
        console.log('    2、编译js(js合并)');
        console.log('    grunt js');
        console.log('    3、拷贝img');
        console.log('    grunt img');
        console.log('    4、编译css(SCSS转成CSS)');
        console.log('    grunt css');        
    });



    grunt.registerTask('test', ['']);
    grunt.registerTask('all', ['img', 'css', 'html']);
   // grunt.registerTask('css', ['clean:css', 'sass:css']);
    grunt.registerTask('css', ['clean:css', 'copy:css']);
    grunt.registerTask('img', ['clean:img', 'copy:img']);
    grunt.registerTask('html', ['clean:html', 'copy:html']);


};