<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    </head>
    <body
        class="text-lg font-body"
        style="background-image: url('/assets/images/bg.png');"
    >
        @include('_partials.header')

        <section class="max-w-xl mx-auto my-0">
            <section id="article-content">
                <article class="pl-3 mt-16 mx-12 mb-12">
                    <h1>{{ $page->title }}</h1>
                    @yield('content')
                </article>
            </section>
        </section>
    </body>
</html>
