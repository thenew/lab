<?php
$title = 'Custom ScrollBar';
$includes = '
	<link rel="stylesheet" href="css/customScrollBar.css">
	<script src="../_js/mootools-core-1.3.1.js"></script>
	<script src="../_js/mootools-more-1.3.1.1.js"></script>
';
include('../_layout/header.html');
?>
	<div class="cmd">
		<a id="add" class="the-button secondary" href="">+</a>
		<a id="rm" class="the-button secondary" href="">-</a>
		<form><fieldset>
			<label for="style">Style</label>
			<select name="style" id="style">
				<option value="default" selected="selected">Defaut</option>
				<option value="slider">Slider</option>
				<option value="mac">Mac OS</option>
			</select>
		</fieldset></form>
	</div>
	<div class="wrap">
		<div id="container" class="scrollme inner-content empty">
			<ul id="container-content">
			</ul>
		</div>
		<div id="scrollbar" class="scrollbar-vert hideme default"><div id="handle" class="handle-vert"></div></div>
	</div>
	<script src="js/functions.js"></script>
<?php include('../_layout/footer.html'); ?>