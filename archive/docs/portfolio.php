<!DOCTYPE html>
<html class="no-js">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Sandhoora Holdings</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="robots" content="all,follow">
    <!-- Bootstrap and Font Awesome css-->
    <!-- we use cdn but you can also include local files located in css directory-->
    <link rel="stylesheet" href="css/font-awesome-animation.min.css">
    <link rel="stylesheet" href="css/font-awesome.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css">
    <!-- Google fonts - Montserrat for headings, Cardo for copy-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,700|Cardo:400,400italic,700">
    <!-- onepage scroll stylesheet-->
    <link rel="stylesheet" href="css/onepage-scroll.css">
    <!-- theme stylesheet-->
    <link rel="stylesheet" href="css/style.default.css" id="theme-stylesheet">

    <!-- Favicon-->
    <link rel="shortcut icon" href="img/favicon.png">

    <!-- galary animation -->
    <link href="css/style.css" rel="stylesheet" type="text/css">
    <link href="css/responsive.css" rel="stylesheet" type="text/css">
    <link href="css/animate.css" rel="stylesheet" type="text/css">

    <!-- Custom stylesheet - for your changes-->
    <link rel="stylesheet" href="css/custom.css">

    <!-- Tweaks for older IEs--><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script><![endif]-->
  </head>
  <body>
    <div class="wrapper">
      <div class="main">
        <!-- Galary page -->
        <section id="page8" class="section-gray">
          <div class="content">
            <div class="container clearfix">
              <div class="row">
                <div class="col-md-12">
                  <div class="portfolioFilter">
                    <h2 class="heading">Portfolio</h2>
                    <ul class="Portfolio-nav">
                      <li><a href="#" data-filter=".sandhoora_homes" class="current">Sandhoora Homes</a></li>
                      <li><a href="#" data-filter=".sandhoora_interiors">Sandhoora Interiors</a></li>
                      <li><a href="#" data-filter=".sandhoora_trading">Sandhoora Trading</a></li>
                      <li><a href="#" data-filter=".sandhoora_lands">Sandhoora Lands</a></li>
                    </ul>
                  </div>
                  <div class="portfolioContainer">
                    <?php
                      $gallary_url =  'img/gallary/';
                      $homes_projects = glob(dirname(__FILE__).'/'.$gallary_url.'homes'.'/*' , GLOB_ONLYDIR);
                      foreach ($homes_projects as $p)
                      {
                        echo '<div class=" Portfolio-box sandhoora_homes">
                                <a href="#"><img style="max-width:100%;
max-height:100%;" src="'.$gallary_url.'/homes/'.basename($p).'/icon/icon.jpg" alt="Icon"></a>
                                <h3>Foto Album</h3>
                                <p>Print Design</p>
                              </div>';
                      }
                    ?>
                    <div class="Portfolio-box sandhoora_interiors">
                      <a href="#"><img src="img/Portfolio-pic2.jpg" alt=""></a>
                      <h3>Luca Theme</h3>
                      <p>Web Design</p>
                    </div>
                    <div class=" Portfolio-box sandhoora_trading">
                      <a href="#"><img src="img/Portfolio-pic3.jpg" alt=""></a>
                      <h3>Uni Sans</h3>
                      <p>Branding</p>
                    </div>
                    <div class=" Portfolio-box sandhoora_lands">
                      <a href="#"><img src="img/Portfolio-pic4.jpg" alt=""></a>
                      <h3>Vinyl Record</h3>
                      <p>Photography</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
    <!-- Javascript files-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/jquery-1.11.0.min.js"><\/script>')</script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js"></script>
    <script src="js/jquery.cookie.js"></script>
    <script src="js/jquery.onepage-scroll.js"></script>
    <script src="js/front.js"></script>

    <!-- isotope galary animation library -->
    <script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
    <script type="text/javascript" src="js/jquery.isotope.js"></script>

    <!-- istope init code -->
    <script type="text/javascript">
      $(window).load(function() {


        var $container = $('.portfolioContainer'),
          $body = $('body'),
          colW = 375,
          columns = null;

         // $('.Portfolio-box').css('width', '50px');
        $container.isotope({
          // disable window resizing
          resizable: true,
          masonry: {
            columnWidth: colW
          }
        });

        $(window).smartresize(function() {
          // check if columns has changed
          var currentColumns = Math.floor(($body.width() - 30) / colW);
          if (currentColumns !== columns) {
            // set new column count
            columns = currentColumns;
            // apply width to container manually, then trigger relayout
            $container.width(columns * colW)
              .isotope('reLayout');
          }
        }).smartresize(); // trigger resize to set container width

        $('.portfolioFilter a').click(function() {
          $('.portfolioFilter .current').removeClass('current');
          $(this).addClass('current');

          var selector = $(this).attr('data-filter');
          $container.isotope({

            filter: selector,
          });
          return false;
        });

        $container.isotope({
            filter: '.sandhoora_homes'
        });

      });
    </script>
  </body>
</html>
