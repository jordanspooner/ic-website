#!/usr/bin/php
<?php
function compile_latex() {
    $output = shell_exec("/usr/bin/pdflatex -output-directory=/homes/js4416/public_html/php/output -interaction=batchmode /homes/js4416/public_html/php/output/output.tex");
    echo $output;
}
compile_latex();
?>
