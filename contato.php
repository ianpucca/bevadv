<?

if($_POST['manda']=="ok"){

$_POST['mensagem']=nl2br($_POST['mensagem']);
//$destinatario="mendonca@navegarbrasil.com.br";
$destinatario="ianpuccam@gmail.com";
$assunto2="Bevadv.com.br - ".$_POST['assunto'];
$mensagem_2 = "
              <b>Nome:</b> ".$_POST['nome']."<br />
              <b>E-mail:</b> ".$_POST['email']."<br />
              <b>Assunto:</b> ".$_POST['assunto']."<br />
              <b>Mensagem:</b> ".$_POST['mensagem']."<br />

              ";

$corpo = '
<html>
<head>
<title>Bernardes & Viana</title>
</head>
<body>
<p>
'.$mensagem_2.'
</p>
</body>
</html>';

  $headers = "MIME-Version: 1.1\n";
  $headers .= "Content-type: text/html; charset=utf-8\n";
  $headers .= "Return-Path: Bernardes & Viana <".$destinatario.">\n"; // return-path
  $headers .= "From: ".$_POST[name]." <".$_POST['email'].">\n"; // remetente
  $headers .= "Reply-To: ".$_POST[name]." <".$_POST['email'].">\n"; // reply-to
  //$headers .= "Bcc: ".$destinatario2."\r\n"; // Para cópia oculta

mail($destinatario,$assunto2,$corpo,$headers);
//Exicir Alert
?>

<script>
  alert('Mensagem enviada com Sucesso!');
</script>

<?

}

?>

<!DOCTYPE html>

<html lang="pt-BR">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Contato - Bernardes & Viana Advogados Associados</title>
    <meta name="description" content="Entre em contato conosco: (62) 3991-2056. Rua Ruy Brasil Cavalcante, Setor Oeste, 74.140-140">
    <meta name="keywords" content="advogado em goiania, bernardes e viana, escritorio, advocacia">
    
    <?php include 'inc/header-tags.php'; ?>

  </head>
  <body>

  <?php include 'inc/header-menu.php'; ?>

  <section>
    <div class="container-fluid banner-principal">
      <img class="img-responsive" src="img/img-contato.jpg">    
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
                <h3>Contato</h3>
                <img class="img-responsive" src="img/center-hr.png">
              </div>  
            </div> 
            <div class="col-md-offset-1 col-md-5">
              <h4><img class="img-responsive mw-220" src="img/logo_sm.png"></h4><br>
              <p>bevadv@bevadv.com.br<br>
              (62) 3991-2056<br>
              (62) 9 99902-782<br>
              <p>Rua Ruy Brasil Cavalcante, nº 184<br>
              Quadra R25, Lote 01<br>              
              Setor Oeste, Goiânia/GO<br>
              CEP 74.140-140</p>
              <p class="oab">www.bevadv.com.br</p>
            </div>
            <div class="col-md-6">
              <h4>Fale Conosco</h4>
              <form action="" method="post" class="probootstrap-form">

                <input type="hidden" name="manda" value="ok" /> 

                <div class="row">
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="fname">Nome</label>
                      <input type="text" class="form-control" id="nome" name="nome">
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <label for="lname">E-mail</label>
                      <input type="email" class="form-control" id="email" name="email">
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label for="email">Assunto</label>
                  <input type="text" class="form-control" id="assunto" name="assunto">
                </div>
                <div class="form-group">
                  <label for="message">Mensagem</label>
                  <textarea cols="30" rows="10" class="form-control textarea" id="mensagem" name="mensagem"></textarea>
                </div>
                <div class="form-group text-right">
                  <input type="submit" class="btn btn-primary btn-mg" id="submit" name="submit" value="enviar">
                </div>
              </form>
            </div>
        </div>          
      </div>
    </div>
  </section>

  <section class="probootstrap-footer pb40">
    <div class="container">
      <div class="col-md-offset-1 col-md-11">
        <h4 class="pclientes">Mapa
          <img class="hidden-xs left-hr" src="img/right-hr.png">
        </h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7643.554987216517!2d-49.275843!3d-16.6880143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1ae4447bfd9%3A0xe61091e04d21e1!2sBernardes+%26+Viana+advogados!5e0!3m2!1spt-BR!2sbr!4v1538276537433" width="100%" height="251" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
  </section>

  <?php include'inc/cliente.php'; ?>

  <?php include'inc/footer.php'; ?>

  <script src="js/scripts.min.js"></script>
  <script src="js/main.min.js"></script>
  <script src="js/custom.js"></script>


  </body>
</html>