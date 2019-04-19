<header class="my-6 mx-4">
    <nav>
        <ul class="flex">
            <li class="ml-4">{!! $page->selected('', 'Home') !!}</li>
            <li class="ml-4">{!! $page->selected('random') !!}</li>
            <li class="ml-4">{!! $page->selected('writings') !!}</li>
            <li class="ml-4">{!! $page->selected('about') !!}</li>
            <li class="ml-4">{!! $page->selected('contact') !!}</li>
            <li class="ml-4">{!! $page->selected('beers') !!}</li>
        </ul>
    </nav>
</header>
