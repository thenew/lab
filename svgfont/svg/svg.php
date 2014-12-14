<?php
header('Content-type: image/svg+xml');

if( isset($_GET['text']) && ! empty($_GET['text']) ) {
    $text = strip_tags($_GET['text']);
} else {
    $text = 'Joyeux Noel';
}

require '../lib/EasySVG.php';

$svg_font = new EasySVG();
// $svg_font->setFontSVG("../assets/fonts/nexarustslab-blackshadow01.svg");
// $svg_font->setFontSVG("../assets/fonts/paris-bold-webfont.svg");
// $svg_font->setFontSVG("../assets/fonts/ostrich-sans-regular.svg");
// $svg_font->setFontSVG("../assets/fonts/ostrich-sans-dashed.svg");
$svg_font->setFontSVG("../assets/fonts/knewave-webfont.svg");
$svg_font->setFontSVG("../assets/fonts/alexbrush-regular.svg");
$svg_font->setFontSize(100);
// $svg_font->setFontColor('#222');
$svg_font->addText($text, 0, 0, array("stroke-dasharray" => "988.01", "stroke-dashoffset" => "988.01", "stroke" => "#222", "stroke-width" => "1.5", "fill" => "none"));
$svg_font->addAttribute("xmlns", "http://www.w3.org/2000/svg");
$svg_font->addAttribute("width", "100%");
$svg_font->addAttribute("height", "100%");
$svg_font->addAttribute("class", "font-svg");



echo $svg_font->asXML();
die;
