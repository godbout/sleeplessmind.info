<article class="pl-10 mt-60 mx-50 mb-50">
    <h1>{{ $page->title }}</h1>
    @yield('content')
    <footer class="my-35 float-right">
        @if ($page->type === 'conscious')
            {{ date('M d, Y', strtotime($page->created_at)) }}
        @else
            {{ date('h:iA', strtotime($page->created_at)) }}
        @endif
    </footer>
</article>
