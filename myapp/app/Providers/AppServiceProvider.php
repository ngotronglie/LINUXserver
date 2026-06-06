<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (app()->runningInConsole()) {
            return;
        }

        if (request()->hasSession() && session()->has('locale')) {
            $locale = session('locale');

            if (in_array($locale, ['vi', 'en'])) {
                app()->setLocale($locale);
            }
        }
    }
}
