<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('/products', [ProductController:: class, 'index'])->name('product.index');
    Route::post('/products', [ProductController:: class, 'store'])->name('product.store');
    Route::get('/products/{product}/edit', [ProductController:: class, 'edit'])->name('product.edit');
    Route::put('/products/{product}', [ProductController:: class, 'update'])->name('product.update');
    Route::delete('/products/{product}', [ProductController:: class, 'destroy'])->name('product.destroy');
    Route::get('/products/create', [ProductController::class, 'create'])->name('product.create');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
