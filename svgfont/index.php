<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style type="text/css">
        .font-svg {
            display: block;
            margin: 60px auto;
        }
        .font-svg path {
            fill: #222;
        }
    </style>
</head>
<body>

    <?php
    if( isset($_GET['text']) && ! empty($_GET['text']) ) {
        $text = strip_tags($_GET['text']);
    } else {
        $text = 'no';
    }
    $svg_path = 'svg/svg.php?text='.$text;
    ?>

    <img src="<?php echo $svg_path; ?>" alt="" />
</body>
</html>
