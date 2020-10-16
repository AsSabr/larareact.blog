<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
//    protected $guarded = [];

    // Posts
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
