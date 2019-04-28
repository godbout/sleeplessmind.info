<?php

return [
    'production' => false,
    'baseUrl' => 'https://sleeplessmind.info',
    'collections' => [
        'writings' => [
            'extends' => '_layouts.writing',
            'sort' => '-created_at'
        ]
    ],
    'selected' => function ($page, $link, $title = '') {
        $title = $title ?: ucfirst($link);

        if (trim($page->getPath(), '/') === $link
            || (empty($page->getPath()) && empty($link))) {
            return '<span class="nav-item selected font-bold">' . $title . '</span>';
        }

        /**
         * Adding trailing slash to prevent useless redirects
         * (happens on some server)
         */
        $link = '/' . $link . (empty($link) ? '' : '/');

        return '<a class="nav-item" href="' . $link . '">' . $title . '</a>';
    }
];
