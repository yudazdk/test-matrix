<?php

namespace api\tasks;

require 'db.php';


class tasksModel extends \Database
{
    private $table = 'tasks';

    public function __construct()
    {
        parent::__construct();
    }

    public function getTasks()
    {

        return $this->selectQuery($this->table);
    }

    public function addTask($name) {
        $statement = $this->db->prepare('INSERT INTO ' . $this->table . ' (name) VALUES (:name)');
        $statement->execute(['name' => $name]);
    }

    public function deleteTask($id) {
        $statement = $this->db->prepare('DELETE FROM ' . $this->table . ' WHERE id = ?');
        $statement->execute(array($id));
    }

    public function editTask($fields) {
        $id = $fields['id'];
        $name = $fields['name'];
        $is_completed = $fields['is_completed'];

        $sql = "UPDATE tasks SET name=?, is_completed=? WHERE id=?";
        $stmt= $this->db->prepare($sql);
        $stmt->execute([$name, $is_completed, $id]);
    }
} ?>