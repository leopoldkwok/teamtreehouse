<?php
require 'vendor/autoload.php';
date_default_timezone_set('Europe/London');

use Monolog\Logger;
use Monolog\Handler\StreamHandler;

$log = new Logger('name');
$log->pushHandler(new StreamHandler('app.txt', Logger::WARNING));

$log->addWarning('Oh Noes.');
echo 'Hello World!';