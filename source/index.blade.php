@extends('_layouts.master')

@section('body')
<h1 class="text-default text-5xl tracking-wide my-8 font-thin">2018's reviews</h1>

<p class="my-8">
    To add a link to your review update the <a href="https://github.com/Elhebert/a-yearly-review/blob/master/config.php"><code>config.php</code></a> file and make a PR.
</p>

<ul class="list-reset">
    @foreach ($page->reviews->sortBy('author') as $review)
        <li class="my-2">
            <a
                class="text-blue-dark hover:no-underline text-xl"
                href="{{ $review->link }}"
            >
                {{ $review->author }}
            </a>
        </li>
    @endforeach
</ul>
@endsection
