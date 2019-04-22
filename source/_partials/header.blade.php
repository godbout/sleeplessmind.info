<header class="my-25 mx-15">
    <nav class="">
        <ul class="flex flex-wrap sm:flex-row">
            <li class="pb-20 mx-13">{!! $page->selected('', 'Home') !!}</li>
            <li class="pb-20 mx-13">{!! $page->selected('random') !!}</li>
            <li class="pb-20 mx-13">{!! $page->selected('writings') !!}</li>
            <li class="pb-20 mx-13">{!! $page->selected('about') !!}</li>
            <li class="pb-20 mx-13">{!! $page->selected('contact') !!}</li>
            <li class="pb-20 mx-13">{!! $page->selected('beers') !!}</li>
        </ul>
    </nav>
</header>
