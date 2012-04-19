<?php
$title = 'Mail';
$includes = '
';
include('../_layout/header.html');

include('mail.php');
?>
<div class="wrap">
  <form id="contact_form" class="cssn_form" action="" method="POST">
    <fieldset>
      <ul>
        <li>
          <label for="email">Nom</label>
          <input type="text" id="email" name="email" placeholder="Georges Abitbol" required />
        </li>
        <li>
          <label for="name">Email</label>
          <input type="text" id="name" name="name" placeholder="g.abitbol@laclasse.us" required />
        </li>
        <li>
          <label for="object">Sujet</label>
          <input type="text" id="object" name="object" placeholder="Un Conseil" />
        </li>
        <li>
          <label for="message">Message</label>
          <textarea id="message" name="message" required>Écoute moi bien mon p'tit José. Tu baises les ménagères, bien, tu dois avoir le cul qui brille. Mais c'est pas ça qu'on appelle la classe.</textarea>
        </li>
      </ul>
    </fieldset>
    <ul>
      <li>
        <button type="submit">Envoyer</button>
      </li>
    </ul>
  </form>
</div>
<?php include('../_layout/footer.html'); ?>