@extends('layout')

@section('og')

    <meta property="og:title" content="Top NHL players - Defensemen">
    <meta property="og:description" content="Top 10 NHL defensemen grouped by year.">
    <meta property="og:url" content="http://www.topnhldefensemen.com">
    <meta property="og:image" content="http://www.topnhlplayers.com/assets/img/og/defensemen.jpg">

@endsection

@section('content')

    <div>
        <h2>Defensemen</h2>
        @include('_statistics', ['position' => $position, 'statistics' => $statistics])
    </div>

@endsection
