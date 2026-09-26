<?php
namespace Deployer;

require 'recipe/common.php';

set('application', 'y2kenn');
set('repository', 'git@github.com:kennsampson/y2kenn.git');
set('branch', 'main');
set('keep_releases', 5);

set('shared_files', []);
set('shared_dirs', []);
set('writable_dirs', []);

host('y2kenn.com')
    ->setHostname('ssh.y2kenn.com')
    ->setRemoteUser('deploy')
    ->setDeployPath('/www/wwwroot/y2kenn.com');

desc('Installs dependencies and builds the Vite app on the server');
task('build', function () {
    cd('{{release_path}}');
    run('npm ci --no-audit --no-fund');
    run('npm run build');
    if (!test('[ -f dist/index.html ]')) {
        throw error('Build finished but dist/index.html is missing.');
    }
});

task('deploy', [
    'deploy:prepare',
    'build',
    'deploy:publish',
]);

after('deploy:failed', 'deploy:unlock');