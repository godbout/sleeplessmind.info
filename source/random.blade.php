---
permalink: random/index.php
---
<?php
    $urls = $writings->map(function ($writing) {
        return "'{$writing->getUrl()}/'";
    });

    $urls = implode(",\r\n    ", $urls->toArray());

    echo <<<EOT
<?php

\$urls = [
    'https://sleeplessmind.info/writings/3/',
    'https://sleeplessmind.info/writings/my-gift/'
];

header('Location: ' . \$urls[array_rand(\$urls)], true, 303);

EOT;
