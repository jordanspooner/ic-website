#!/usr/bin/php
<?php
function return_pdf() {
    header("Content-Type: application/octet-stream");
    header("Content-Transfer-Encoding: Binary");
    header("Content-disposition: attachment; filename=\"notes.pdf\""); 
    readfile("/homes/js4416/public_html/php/output/output.pdf");
}
return_pdf();
?>
