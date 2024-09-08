---
extends: _layouts.master
title: sleeplessmind.info
---

@section('body')
    @section('content')
        {!! $writings->first()->getContent() !!}
    @endsection

    @include('_partials.writing', ['page' => $writings->first()])
@endsection
