<?php

Auth::routes();

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', 'DashboardController@index')->name('dashboard');

Route::get('/api/{id}', 'PagesController@api')->name('api');

Route::get('/auth-id-api', 'PagesController@authid')->name('authId');
Route::patch('/update-page/{id}', 'PagesController@update')->name('updatePage');
Route::patch('/update-page-order', 'PagesController@pageorder')->name('updatePageOrder');
Route::get('/all-pages', 'PagesController@index')->name('pages');
Route::get('/all-product-pages', 'PagesController@productpages')->name('productPages');
Route::get('/edit-page-api/{id}', 'PagesController@edit')->name('editPage');
Route::post('/store-page', 'PagesController@store')->name('storePage');
Route::post('/store-image', 'PagesController@storeimage')->name('storeImage');
Route::delete('/delete-page/{id}', 'PagesController@destroy')->name('deletePage');

Route::patch('/update-product/{id}', 'ProductsController@update')->name('updateProduct');
Route::patch('/update-product-order', 'ProductsController@productorder')->name('updateProductOrder');
Route::get('/all-products', 'ProductsController@index')->name('products');
Route::post('/store-product', 'ProductsController@store')->name('storeProduct');
Route::get('/edit-product-api/{id}', 'ProductsController@edit')->name('editProduct');
Route::delete('/delete-product/{id}', 'ProductsController@destroy')->name('deleteProduct');
