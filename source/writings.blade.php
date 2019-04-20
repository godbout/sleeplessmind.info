---
extends: _layouts.writings_list
title: Writings
---

@section('content')
<ol id="writings-list">
@foreach ($writings as $writing)
    <li>
        <article class="mt-60 mr-50 mb-50 ml-50">
            <h1>
                <a href="{{ $writing->getUrl() }}">{{ $writing->title }}</a>
            </h1>
        </article>
    </li>
@endforeach
</ol>
@endsection


