@extends('_layouts.master')

@section('body')
    @section('content')
        {!! $writings->first()->getContent() !!}
    @endsection

    @include('_partials.writing', ['page' => $writings->first()])
@endsection
