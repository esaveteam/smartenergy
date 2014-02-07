<?php

    header('Content-disposition: attachment; filename=fanfile.txt');
header('Content-type: application/txt');
readfile('fanfile.txt');


?>