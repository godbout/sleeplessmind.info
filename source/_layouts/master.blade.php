<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{{ $page->title }}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
        <link rel="manifest" href="/assets/favicons/site.webmanifest">
        <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#000000">
        <meta name="msapplication-TileColor" content="#da532c">
        <meta name="msapplication-config" content="/assets/favicons/browserconfig.xml">
        <meta name="theme-color" content="#ffffff">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>
    <body
        class="text-normal font-body leading-24 font-normal"
        style="background-image: url('/assets/images/bg.png')"
    >
        @include('_partials.header')

        <section class="max-w-xl mx-auto my-0">
            <section>
                @yield('body')
            </section>
        </section>
    </body>
    <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
</html>
