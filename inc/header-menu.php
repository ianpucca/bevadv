<?php
    /**
    * Verifica o script ativo e compara com $script indicado;
    * Se a comparação for positiva, imprime a CLASS;
    * Se a comparação falhar, retorna FALSE.
    * @return string|boolean
    */
    function setClass($script = NULL){

      $link = $_SERVER['PHP_SELF'];

      $ex = explode('/', $link);

      $ultima = $ex[count($ex)-1];

        if($ultima == $script){
            echo ' class="active"';
        } else {
            return false;
        }
    }

?>

<header role="banner" class="probootstrap-header">
    <div class="row">
      <a href="index.php" class="probootstrap-logo visible-xs">
        <img src="img/logo_sm.png" class="logo-menor" alt="Bernardes e Viana Advogados">
      </a>

      <a href="#" class="probootstrap-burger-menu visible-xs"><i><span style="font-family: Vollkorn; text-transform: none; position: relative; bottom: 2px; left: 0px;">menu</span></i></a>
      <div class="mobile-menu-overlay"></div>

      <nav role="navigation" class="probootstrap-nav hidden-xs">
        <ul class="probootstrap-main-nav hidden-xs">
          <div class="container">
            <div class="pull-left">
              <li<?=setClass('o-escritorio.php')?>><a href="o-escritorio">o escritório</a></li>
              <li<?=setClass('atuacao.php')?>><a href="atuacao">atuação</a></li>
            </div>
            <div class="pull-right">
              <li<?=setClass('advogados.php')?>><a href="advogados">advogados</a></li>
              <li<?=setClass('contato.php')?>><a href="contato">contato</a></li>
            </div>
          </div>
          <div class="container">
            <img onclick="document.location='index.php'" src="img/logo_md.png" style="width: 98%; margin: auto; margin-top: 20px; margin-bottom: 20px;" class="img-responsive logo" alt="Bernardes e Viana Advogados - Goiânia GO">
          </div>
        </ul>          

        <ul class="probootstrap-main-nav visible-xs">
          <div class="container">
            <li<?=setClass('o-escritorio.php')?>><a href="o-escritorio">o escritório</a></li>
            <li<?=setClass('atuacao.php')?>><a href="atuacao">atuação</a></li>
            <li<?=setClass('advogados.php')?>><a href="advogados">advogados</a></li>
            <li<?=setClass('contato.php')?>><a href="contato">contato</a></li>
          </div>
        </ul>

        <div class="extra-text visible-xs">
          <a href="#" class="probootstrap-burger-menu"><i><span style="font-family: Vollkorn; text-transform: none; position: relative; bottom: 2px; left: 0px;">menu</span></i></a>
          <!-- Redes Sociais 

          <h5>Connect With Us</h5>
          <ul class="social-buttons">
            <li><a href="#"><i class="icon-twitter"></i></a></li>
            <li><a href="#"><i class="icon-facebook2"></i></a></li>
            <li><a href="#"><i class="icon-instagram2"></i></a></li>
          </ul>

          Fim Redes Sociais -->
        </div>
      </nav>
    </div>
  </header>