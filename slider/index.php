<?php
$title = 'Fondations Slider';
$includes = '
  <link rel="stylesheet" href="css/styles.css">
  <script src="../_js/mootools-core-1.3.1.js"></script>
  <script src="../_js/mootools-more-1.3.1.1.js"></script>
  <script src="js/Fon_slider.js"></script>
';
include('../_layout/header.html');
?>
<div class="cmd">
  <?php
  $choices = array('vertical', 'horizontal', 'fade');
  foreach ($choices as $c) {
    $class = (isset($_GET['layout']) && $c == $_GET['layout'] ) ? 'active' : '';
    echo '<div><a class="'.$class.'" href="?layout='.$c.'">Layout '.$c.'</a></div>';
  }
  ?>
</div>
<div class="wrap">
  <div class="fon-slider-container">
    <div id="fon-slider" class="fon-slider <?php if(isset($_GET['layout'])) echo $_GET['layout']; ?>">
      <ul class="cf fon-slider-items">
        <li><img src="http://placehold.it/800x450/22B573/ffffff&text=Cupcake+ipsum" alt=""></li>
        <li><img src="http://placehold.it/800x450/FF5D5D/ffffff&text=dolor+sit" alt=""></li>
        <li><img src="http://placehold.it/800x450/BADA55/ffffff&text=Oat+cake" alt=""></li>
        <li><img src="http://placehold.it/800x450/FFC280/ffffff&text=marshmallow" alt=""></li>
        <li><img src="http://placehold.it/800x450/FF5D5D/ffffff&text=macaroon" alt=""></li>
        <li><img src="http://placehold.it/800x450/BADA55/ffffff&text=jelly+ice+cream" alt=""></li>
        <li><img src="http://placehold.it/800x450/FFC280/ffffff&text=chocolate+bar" alt=""></li>
      </ul>
      <ul class="cf pagination"></ul>
    </div>
    <nav class="fon-slider-nav">
      <a href="#" class="prev"><</a>
      <a href="#" class="next">></a>
    </nav>
  </div>
</div>
<script type="text/javascript">
window.addEvent('domready', function(){
  var fonslider = new Fon_slider({
    // $_GET['layout']
    <?php if(isset($_GET['layout'])) { ?>
      layout: "<?php echo $_GET['layout']; ?>",
    <?php } ?>
  });
});
</script>
<?php include('../_layout/footer.html'); ?>