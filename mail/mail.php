<?php
include('phpmailer/class.phpmailer.php');



if(isset($_POST) && !empty($_POST)){
	// Switch between Name and Email to secure form against spam
	$regexp="/^[a-z0-9]+([_\\.-][a-z0-9]+)*@([a-z0-9]+([\.-][a-z0-9]+)*)+\\.[a-z]{2,}$/i";
	if (!preg_match($regexp, $_POST['name'])) die;
	
	// mail html template
	$tpl_mailbody = '
	<html>
		<body>
			<p>Bonjour, <br />Vous avez re&ccedil;u un message sur le site &quot;'.htmlentities('Lab').'&quot;</p>
			<p>Nom : '.$_POST['email'].'</p>
			<p>Email : '.$_POST['name'].'</p>
			<p>Message : '.$_POST['message'].'</p>
		</body>
	</html>';

	$mail = new PHPmailer();

	// Pour un envoi par SMTP
	// $mail->IsSMTP();
	// $mail->Host='hote_smtp';

	// Pour un envoi par la fonction mail de PHP
	$mail->IsMail(); // spécifie que la fonction mail de PHP doit être utilisée

	$mail->IsHTML(true); // si votre message est au format HTML
	$mail->CharSet = 'utf-8'; // encodage du mail
	$mail->From = $_POST['name']; // votre adresse
	$mail->FromName = $_POST['email']; // votre nom
	$mail->AddAddress('ry.barthez@gmail.com'); // adresse du destinataire
	//$mail->AddBCC('autreadresse@destinataire'); // ajout des destinataires copie cachée 
	$mail->AddReplyTo('no-reply@thenew.fr');    // adresse de retour
	$mail->Subject = '[formulaire lab] '.$_POST['email']; // sujet de votre message
	$mail->Body = $tpl_mailbody; //pour un message HTML ne pas oubliez IsHTML(true)

	if(!$mail->Send()){
		echo '
		<ul class="fon_messages">
			<li class="error"><p>Erreur lors de l\'envoi du mail</p></li>
			<li class="error"><p>'.$mail->ErrorInfo.'</p></li>
		</ul>
	  ';
	} else{
	  echo '
		<ul class="fon_messages">
			<li class="success"><p>Mail envoyé avec succès</p></li>
		</ul>
	  ';
	}

	// Seulement si vous utilisez SMTP
	// $mail->SmtpClose();
	    
	unset($mail);
}
?>
