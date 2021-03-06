---
permalink: random/index.php
---
<?php
    $urls = $writings->map(function ($writing) {
        return "'{$writing->getUrl()}/'";
    });

    $urls = implode(',' . PHP_EOL . '    ', $urls->toArray());

    echo <<<EOT
<?php

\$urls = [
    $urls
];

header('Location: ' . \$urls[array_rand(\$urls)], true, 303);

EOT;
