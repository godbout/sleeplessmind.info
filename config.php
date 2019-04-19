<?php

return [
    'production' => false,
    'baseUrl' => '',
    'collections' => [],
    'selected' => function ($page, $link, $title = '') {
        $title = $title ?: ucfirst($link);

        if (str_contains($page->getPath(), $link)
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
