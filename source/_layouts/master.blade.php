<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
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
