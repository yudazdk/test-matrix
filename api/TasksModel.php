<?php

namespace api\tasks;

require 'db.php';


class tasksModel extends \Database
{
    public function __construct()
    {
        parent::__construct();
    }

    public function getTasks()
    {
        $query = "SELECT * FROM tasks";

        return $this->selectQueryStr($query);
    }
} ?>