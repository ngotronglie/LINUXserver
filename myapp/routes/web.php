<?php

use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    $locale = session('locale', config('app.locale'));

    if (in_array($locale, ['vi', 'en'])) {
        app()->setLocale($locale);
    }

    return view('welcome');
});

Route::get('/language/{locale}', function ($locale) {

    if (!in_array($locale, ['vi', 'en'])) {
        abort(404);
    }

    session()->put('locale', $locale);

    return redirect('/');
});
