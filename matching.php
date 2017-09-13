<!DOCTYPE html>

<html>

  <head>
    <title>the Matching Game</title>
    <link rel="stylesheet" type="text/css" href="matching.css">
  </head>

  <body>
    <table>
      <tr>
        <td><button type="button" class="box" id="box1" onmouseover="highlight('box1')" onmouseleave="unhighlight('box1')"></button></td>
      </tr>
    </table>
    <table>
      <tr>
        <?php
          for (i = 0 ; i < 16 ; i++) {
            echo("<button type='button' class='box' id='box" + i + "' onmouseover='highlight('box1')' onmouseleave='unhighlight('box1')'></button></td>");
          }
        ?><td>
      </tr>
    </table>
  </body>

  <script src="matching.js"></script>

</html>
