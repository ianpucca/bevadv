<link href="inc/css-menu/clientes-style.css" rel="stylesheet">

<script type="text/javascript" src="inc/css-menu/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="inc/css-menu/easing.js"></script>
<script type="text/javascript" src="inc/css-menu/ccslider.js"></script>

<script src="css-menu/fancybox/jquery.fancybox-1.3.4.pack.js" type="text/javascript"></script>

<!-- carroussel -->
<!--        <link rel="stylesheet" type="text/css" href="../inc/demo.css" /> -->
<link rel="stylesheet" type="text/css" href="inc/style_carroussel.css" />
<link rel="stylesheet" type="text/css" href="inc/jquery.jscrollpane.css" media="all" />
<link href="inc/css-menu/jquery.fancybox-1.3.4.css" rel="stylesheet">

<script type="text/javascript" src="../inc/autolayer.js"></script>
<link rel="stylesheet" href="inc/css-menu/autolayer.css" type="text/css" />

<link rel="stylesheet" type="text/css" href="inc/css-menu/menu-nc.css" />

<script type="text/javascript" src="inc/menu/fsmenu.js"></script>
<link rel="stylesheet" type="text/css" id="listmenu-h" href="css-menu/listmenu_h.css" title="Menu Horizontal" />
<!-- Fallback CSS menu file allows list menu operation when JS is disabled. -->
<!-- This is automatically disabled via its ID when the script kicks in. -->
<link rel="stylesheet" type="text/css" id="fsmenu-fallback" href="css-menu/listmenu_fallback.css" />

<section style="padding-top: 45px !important;">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h4 class="pclientes">Principais clientes
					<img class="hidden-xs left-hr" src="img/right-hr.png">
				</h4>
			</div>		
		</div>
	</div>
	<div class="container-fluid clientes">
		<div class="row">
			<div id="ca-container" class="ca-container">
				<div class="ca-wrapper">
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente01-xpetro.png" alt="Xpetro" />
					</div>
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente02-petrogoias.png" alt="PetroGoias" />
					</div>
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente03-maxcombustiveis.png" alt="Max Combustíveis" />
					</div>
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente04-autoshopping.png" alt="Auto Shopping" />
					</div>
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente05-maincorporadora.png" alt="MA Incorporadora" />
					</div>
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente06-vev.png" alt="V e V Rede de Postos" />
					</div>	
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente07-globaltec.png" alt="GlobalTec" />
					</div>	
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente08-coruja.png" alt="Coruja Café" />
					</div>	
					<div class="ca-item">
						<img class="img-responsive" src="img/cliente09-marinheiro.png" alt="Marinheiro" />
					</div>											
				</div>
			</div>
		</div>
	</div>
</section>

<script type="text/javascript">
	$(document).ready(function(){
		$(window).load(function(){
			$('#splashContent').fadeIn(1);

			$('#splashContent').ccslider({
				effectType: "3d",
				effect: "cubeUp",
				_3dOptions: {
					imageWidth: 1000,
					imageHeight: 290,
					transparentImg: false,
					innerSideColor: "#444",
					makeShadow: true,
					shadowColor: "rgba(0, 0, 0, 0.5)",
					slices: 5,
					rows: 2,
					columns: 4,
					delay: 30,
					delayDir: "first-last",
					depthOffset: 90,
					sliceGap: 30,
					easing: "easeInOutCubic",
					fallBack: "fadeSlide",
					fallBackSpeed: 2000
				}
			});
		});
	});
</script>
<script type="text/javascript" src="inc/css-menu/jquery.contentcarousel.js"></script>
<script type="text/javascript">
	$('#ca-container').contentcarousel();
</script>