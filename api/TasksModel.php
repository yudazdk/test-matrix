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
} ?>