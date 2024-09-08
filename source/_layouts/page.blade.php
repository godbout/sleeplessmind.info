@extends('_layouts.master')

@section('body')
    <article class="pl-10 mt-60 mx-50 mb-50">
        <h1>{{ $page->title }}</h1>
        @yield('content')
    </article>
@endsection


