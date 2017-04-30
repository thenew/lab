<?php
$current_month = date('m');
$last_month = (int) $current_month - 1;
if( strlen($last_month) == 1 ) {
    $last_month = '0'.$last_month;
}

if( ! is_dir($last_month) ) {
    $last_month = $last_month - 1;

    if( strlen($last_month) == 1 ) {
        $last_month = '0'.$last_month;
    }
}

header('Location: '.$last_month.'/');