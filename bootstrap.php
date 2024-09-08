<?php

use App\Listeners\GenerateSitemap;

/** @var $container \Illuminate\Container\Container */
/** @var $events \TightenCo\Jigsaw\Events\EventBus */
$events->afterBuild(GenerateSitemap::class);
