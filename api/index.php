<?php

$host = '127.0.0.1';
$db   = 'todo';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

header('Access-Control-Allow-Origin: *');

try{
    $dsn = "mysql:host=$host;dbname=$db;charset=$charset";
    $pdo = new PDO($dsn, 'root', '');
}catch(PDOException $e){
    echo json_encode([]);
    return;
}

function getAllTasks($pdo) {
    $sth = $pdo->prepare("SELECT * FROM tasks");
    $sth->execute();

    $result = $sth->fetchAll();
    return $result;
}

if ( isset($_GET['action']) && $_GET['action'] == "getAll" ) {
    $result = getAllTasks($pdo);
    echo json_encode($result);
} else {
    switch ($_POST['action']) {
        case 'add':
            $name = $_POST['name'];
            $statement = $pdo->prepare('INSERT INTO tasks (name) VALUES (:name)');

            $statement->execute(['name' => $name]);

            $result = getAllTasks($pdo);
            echo json_encode($result);
            break;

        case 'edit':
            $id = $_POST['id'];
            $name = $_POST['name'];
            $is_completed = $_POST['is_completed'];

            $sql = "UPDATE tasks SET name=?, is_completed=? WHERE id=?";
            $stmt= $pdo->prepare($sql);
            $stmt->execute([$name, $is_completed, $id]);

            $result = getAllTasks($pdo);
            echo json_encode($result);
            break;

        case 'delete':
            $id = $_POST['id'];

            $q = $pdo->prepare("DELETE FROM tasks WHERE id = ?");
            $q->execute(array($id));

            $result = getAllTasks($pdo);
            echo json_encode($result);
            break;
    }
} ?>