<?php

use App\Page;
namespace App;

use Illuminate\Database\Eloquent\Model;

class App extends Model
{
    protected $fillable = [
        'user_id',
    ];

    public function pages()
    {
        return $this->hasMany(Page::class);
    }
}
