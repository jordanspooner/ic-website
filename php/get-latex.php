#!/usr/bin/php
<?php
function get_data($url) {
	$ch = curl_init();
	$timeout = 5;
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
	$data = curl_exec($ch);
	curl_close($ch);
	return $data;
}
function get_latex() {
    $url = $_POST["url"];
    echo $url;
    $tex = get_data($url);
    echo $tex;
    file_put_contents("/homes/js4416/public_html/php/output/output.tex", $tex);
}
get_latex();
?>
