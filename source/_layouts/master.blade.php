<!DOCTYPE html>
<html lang="en">
    <head>
        <title>{{ $page->title }}</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
        <link rel="icon" type="image/png" href="/assets/favicons//favicon-32x32.png" sizes="32x32">
        <link rel="icon" type="image/png" href="/assets/favicons//favicon-16x16.png" sizes="16x16">
        <link rel="manifest" href="/assets/favicons/manifest.json">
        <link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#000000">
    </head>
    <body>
        @include('_partials.header')

        <section class="max-w-xl mx-auto my-0">
            <section>
                @yield('body')
            </section>
        </section>
    </body>
    <script src="{{ mix('js/manifest.js', 'assets/build') }}"></script>
    <script src="{{ mix('js/vendor.js', 'assets/build') }}"></script>
    <script src="{{ mix('js/main.js', 'assets/build') }}"></script>
</html>
