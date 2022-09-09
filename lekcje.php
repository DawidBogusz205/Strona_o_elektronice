<!DOCTYPE html>

<html>
<head>
    <meta charset='utf-8'/>         <!--polski typ znakowy-->
    <title>Elektronika</title>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <link rel='stylesheet' type='text/css' media='screen' href='style.css'/>    <!--zaimportowanie pliku css-->
    <!--<link rel="icon" href="img/header_pcb.png" sizes="16x16" type="image/png">-->
    <meta name="keywords" content="elektronika,układy elektroniczne, pcb"/>
    <meta name="description" content="Forum, porady i wszystko o elektronice"/>
    <meta name="autor" content="Dawid'bugi'Bogusz"/>
    <meta name="robots" content="all"/>     <!-- index, noindex, all, none, follow, nofollow-->

    <!--czcionka roboto VVV-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

    <style>
        section{
            display: flex;
            flex-wrap: wrap;
        }
        section a{
            flex: 1;
            margin-right: 10px;
            margin-bottom: 10px;
            min-width: 20vw;
        }
        article{
            text-align: center;
            word-wrap: break-word;
            min-height: 5vh;
            line-height: 5vh;
        }
    </style>
</head>

<body>
    <header id="top">
        <a href="index.html">
            <h1></h1>
        </a>
    </header>

    <nav>
        <a href="index.html">
            <div>Strona główna</div>
        </a>
        <a href="#kontakt">
            <div>Kontakt</div>
        </a>
        <a href="strony_kolegow.html">
            <div>Strony kolegów</div>
        </a> 
        <a href="zadania.html">
            <div>Zadania</div>
        </a>
        <a href="lekcje.php">
            <div>Lekcje</div>
        </a>
        <a href="zdarzenia strona.html">
            <div>Zdarzenia</div>
        </a>
    </nav>

    <main>
        <section>
            
            <?php
                $dir = 'lekcje/';
                $files = scandir($dir);
                $arr_size = sizeof($files);

                for($nr=2; $nr<$arr_size; $nr++)
                {
                    echo '<a href="', $dir,$files[$nr],'">';
                    echo '<article>',substr($files[$nr], 0, -5),'</article>';
                    echo '</a>';
                }
            ?>
        </section>
    </main>
    

    <a id="go_to_top" href="#top">
        <img src="img/pointer_up.png" alt="Powrót"/>
    </a>

    <footer id="kontakt">
        <p>Kontakt:</p>
        <a href="mailto:123@gmail.com">Email</a>
        <br>

        <p>Formularz kontaktowy:</p>
        <a href="form_kontakt.html">formularz</a>
    </footer>
</body>
</html>