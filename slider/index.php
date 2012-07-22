<?php
$title = 'Fondations Slider';
$includes = '
	<link rel="stylesheet" href="css/styles.css">
	<script src="../_js/mootools-core-1.3.1.js"></script>
	<script src="../_js/mootools-more-1.3.1.1.js"></script>
	<script src="js/Fon_slider.js"></script>
	<script src="js/scripts.js"></script>
';
include('../_layout/header.html');
?>
<div class="wrap">
	<div class="fon-slider-container">
		<div id="fon-slider" class="fon-slider">
			<ul>
				<li><img src="http://placehold.it/800x450/22B573/ffffff" alt=""></li>
				<li><img src="http://placehold.it/800x450/FF5D5D/ffffff" alt=""></li>
				<li><img src="http://placehold.it/800x450/BADA55/ffffff" alt=""></li>
				<li><img src="http://placehold.it/800x450/FFC280/ffffff" alt=""></li>
				<li><img src="http://placehold.it/800x450/FF5D5D/ffffff" alt=""></li>
				<li><img src="http://placehold.it/800x450/BADA55/ffffff" alt=""></li>
				<li><img src="http://placehold.it/800x450/FFC280/ffffff" alt=""></li>
			</ul>
			<ul class="pagination"></ul>
		</div>
		<nav class="fon-slider-nav">
			<a href="#" class="prev"><</a>
			<a href="#" class="next">></a>
		</nav>
	</div>
</div>
<?php include('../_layout/footer.html'); ?>