<?php
$title = 'Scroll Anchor';
$includes = '
	<link rel="stylesheet" href="css/scroll.css">
	<script src="../_js/mootools-core-1.3.1.js"></script>
	<script src="../_js/mootools-more-1.3.1.1.js"></script>
	<script src="js/scroll.js"></script>
';
include('../_layout/header.html');
?>

	<div class="cmd">
		<a href="#page1" class="the-button secondary scrollAnchor changePage">Page 1</a>
		<a href="#page2" class="the-button secondary scrollAnchor changePage">Page 2</a>
		<a href="#page3" class="the-button secondary scrollAnchor changePage">Page 3</a>
		<br /><br />
		<a href="#top" class="the-button secondary scrollAnchor">Top</a>
		<a href="#A" class="the-button secondary scrollAnchor">A</a>
		<a href="#B" class="the-button secondary scrollAnchor" >B</a>
	</div>
	<div class="pages">
		<div class="page" id="page1">
			<ul>
				<li id="page1-top">
					<div class="wrap">
						<h1>Top</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum posuere erat at scelerisque. Vestibulum felis est, lobortis non consequat dapibus, lacinia sed nunc. Cras dapibus faucibus ante, eget ullamcorper nisi molestie vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia metus a libero cursus faucibus. Nunc non lacus congue magna molestie venenatis sed nec.</p>
					</div>
				</li>
				<li id="page1-A">
					<div class="wrap">
						<h1>Titre A</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum posuere erat at scelerisque. Vestibulum felis est, lobortis non consequat dapibus, lacinia sed nunc. Cras dapibus faucibus ante, eget ullamcorper nisi molestie vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia metus a libero cursus faucibus. Nunc non lacus congue magna molestie venenatis sed nec.</p>
					</div>
				</li>
				<li id="page1-B">
					<div class="wrap">
						<h1>Titre B</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum posuere erat at scelerisque. Vestibulum felis est, lobortis non consequat dapibus, lacinia sed nunc. Cras dapibus faucibus ante, eget ullamcorper nisi molestie vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia metus a libero cursus faucibus. Nunc non lacus congue magna molestie venenatis sed nec.</p>
					</div>
				</li>
			</ul>
		</div>
		<div class="page" id="page2">
			<ul>
				<li id="page2-top">
					<div class="wrap">
						<h1>Top</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum posuere erat at scelerisque. Vestibulum felis est, lobortis non consequat dapibus, lacinia sed nunc. Cras dapibus faucibus ante, eget ullamcorper nisi molestie vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus lacinia metus a libero cursus faucibus. Nunc non lacus congue magna molestie venenatis sed nec.</p>
					</div>
				</li>
				<li id="page2-A">
					<div class="wrap">
						<h1>Titre A</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vestibulum posuere erat at scelerisque. Vestibulum felis est, lobortis non consequat dapibus, lacinia sed nunc. </p>
					</div>
				</li>
				<li id="page2-B">
					<div class="wrap">
						<h1>Titre B</h1>
					</div>
				</li>
			</ul>
		</div>
		<div class="page" id="page3">
			<ul>
				<li id="page3-top">
					<div class="wrap">
						<h1>Top</h1>
					</div>
				</li>
				<li id="page3-A">
					<div class="wrap">
						<h1>Titre A</h1>
					</div>
				</li>
				<li id="page3-B">
					<div class="wrap">
						<h1>Titre B</h1>
					</div>
				</li>
			</ul>
		</div>
	</div>
<?php include('../_layout/footer.html'); ?>