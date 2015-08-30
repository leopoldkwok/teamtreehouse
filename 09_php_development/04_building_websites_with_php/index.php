<?php

require 'vendor/autoload.php';
date_default_timezone_set('Europe/London');

$log = new Monolog\Logger('name');
$log->pushHandler(new Monolog\Handler\StreamHandler('app.txt', Monolog\Logger::WARNING));

$log->addWarning('Foo');

echo 'Hello World!';