<?php

require 'config.php';
require 'TasksModel.php';

$taskObj = new \api\tasks\tasksModel();

$taskObj->deleteTask($_GET['id']);
$tasks = $taskObj->getTasks();

header('Access-Control-Allow-Origin: ' . ALLOWED_DOMAIN);
echo json_encode($tasks); ?>