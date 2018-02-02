<?php

namespace App;

use App\Product;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    protected $guarded = [];

    public function products()
    {
        return $this->hasMany(Product::class)->orderBy('order');
    }
}
