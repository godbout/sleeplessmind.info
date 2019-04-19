<header class="my-25 mx-15">
    <nav>
        <ul class="flex">
            <li class="mx-13">{!! $page->selected('', 'Home') !!}</li>
            <li class="mx-13">{!! $page->selected('random') !!}</li>
            <li class="mx-13">{!! $page->selected('writings') !!}</li>
            <li class="mx-13">{!! $page->selected('about') !!}</li>
            <li class="mx-13">{!! $page->selected('contact') !!}</li>
            <li class="mx-13">{!! $page->selected('beers') !!}</li>
        </ul>
    </nav>
</header>
