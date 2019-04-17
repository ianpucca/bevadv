<!DOCTYPE html>

<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bernardes & Viana Advogados Associados - O Escritório</title>
    <meta name="description" content="Bernardes & Viana é uma firma multidisciplinar focada na assessoria jurídica preventiva a empresas de médio e grande porte nos mais variados setores econômicos.">
    <meta name="keywords" content="bernardes e viana, jurídico, goiania, advocacia, escritorio, advogados">
    
    <?php include 'inc/header-tags.php'; ?>

    <style>

    /* Estilo Galeria */
    .img-galery {
      margin-top: 8px;
      max-width: 147px;
      cursor: pointer;
    }

    @media screen and (max-width: 1200px) {
      .img-galery {
        max-width: 100px;
      }
    }      

    @media screen and (max-width: 530px) {
      .img-galery {
        max-width: 90px;
      }
    }    

    </style>

  </head>
  <body>

  <?php include 'inc/header-menu.php'; ?>

  <section>
    <div class="container-fluid banner-principal">
      <img class="img-responsive" src="img/img-escritorio.jpg">    
    </div>
  </section>  

  <section class="probootstrap-light hr-telha">
    <div class="container">
      <div class="row">
      </div>
    </div>
  </section>

  <section class="probootstrap-section section-advs">
    <div class="container">
      <div class="row">
        <div class="probootstrap-animate">
            <div class="col-md-12">
              <div class="text-center mb20">
                <h3>O Escritório</h3>
                <img class="img-responsive" src="img/center-hr.png">
              </div>  
            </div>
            </div>
          </div>
            <div class="row"> 
              <div class="col-sm-6">
                <div id="carousel-bounding-box">
                  <div class="carousel slide" id="myCarousel">
                    <div class="carousel-inner">
                      <div class="active item" data-slide-number="0">
                        <img class="img-responsive" src="img/galeria01.jpg">
                      </div>
                      <div class="item" data-slide-number="1">
                        <img src="img/galeria02.jpg">
                      </div>
                      <div class="item" data-slide-number="2">
                        <img src="img/galeria03.jpg">
                      </div>
                    </div>
                  </div>
                </div>                
                <div class="row">
                  <div class="col-xs-4">
                      <a id="carousel-selector-0">
                          <img class="img-galery" src="img/galeria01.jpg">
                      </a>
                  </div>
                  <div class="col-xs-4 text-center">
                      <a id="carousel-selector-1">
                          <img class="img-galery" src="img/galeria02.jpg">
                      </a>
                  </div>
                  <div class="col-xs-4 text-right">
                      <a id="carousel-selector-2">
                          <img class="img-galery" src="img/galeria03.jpg">
                      </a>
                  </div>
                </div>              
              </div>
            <div class="col-sm-6 mt-30">
              <p><strong class="fontwhite">Bernardes & Viana</strong> é uma firma multidisciplinar focada na assessoria jurídica preventiva a empresas de médio e grande porte nos mais variados setores econômicos.</p>

              <p>O serviço prestado visa precipuamente à racionalização estratégica das tomadas de decisão da empresa sob o viés jurídico – adequando-as aos mais diversos diplomas legais existentes no país. Atua-se, portanto, com foco preventivo – aumentando assim as chances de sucesso do cliente no mercado brasileiro, caracterizado pela forte regulação estatal.</p>

              <p class="oab">Nosso maior diferencial é a proximidade mantida entre os advogados e os clientes representados - aliada ao alto grau de especialização técnica da banca.</p>

              <p>A excelência no serviço prestado e a constante especialização técnica do corpo jurídico é o norte da nossa bússola.</p>

              <p>Apesar do foco prioritariamente preventivo o escritório possui forte atuação contenciosa na Justiça Comum e em Câmaras de Arbitragem – inclusive nos Tribunais Superiores (Superior Tribunal de Justiça e Supremo Tribunal Federal).</p>

              <p>A banca representa clientes em diversos segmentos do mercado, tais como, petróleo e energia (dowstream e midstream) – rede de postos e distribuidoras de combustíveis, shopping centers, tecnologia (ERP), construção civil, varejo alimentício, venda de veículos, logística, prestadores de serviços em geral, entre outros.</p>
            </div>
        </div>          
      </div>
    </div>
  </section>

  <?php include'inc/cliente.php'; ?>

  <?php include'inc/footer.php'; ?>

  <script src="js/scripts.min.js"></script>
  <script src="js/main.min.js"></script>
  <script src="js/custom.js"></script>
  <script>

  /* Script Galeria */

  jQuery(document).ready(function($) {
 
        $('#myCarousel').carousel({
                interval: 5000
        });
 
        //Handles the carousel thumbnails
        $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        try {
            var id = /-(\d+)$/.exec(id_selector)[1];
            console.log(id_selector, id);
            jQuery('#myCarousel').carousel(parseInt(id));
        } catch (e) {
            console.log('Regex failed!', e);
        }
    });
        // When the carousel slides, auto update the text
        $('#myCarousel').on('slid.bs.carousel', function (e) {
                 var id = $('.item.active').data('slide-number');
                $('#carousel-text').html($('#slide-content-'+id).html());
        });
});  
  </script>


  </body>
</html>