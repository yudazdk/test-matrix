<?php

require 'config.php';
require 'TasksModel.php';

$taskObj = new \api\tasks\tasksModel();

$taskObj->editTask($_GET);
$tasks = $taskObj->getTasks();

header('Access-Control-Allow-Origin: ' . ALLOWED_DOMAIN);
echo json_encode($tasks); ?>