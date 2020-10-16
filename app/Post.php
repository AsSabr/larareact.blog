<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class Post extends Model
{
//    protected $guarded = [];

    protected $appends = ['image_url', 'date_formatted', 'excerpt'];

    // return the image url to be displayed on react templates
    public function getImageUrlAttribute()
    {
//        return $this->image!=""?url("uploads/" . $this->image):"";
        return $this->image !="" ? url("uploads/" . $this->image) : "";
    }

    // Category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // User
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Tags
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    // Dates
    public function getDateFormattedAttribute()
    {
        return Carbon::parse($this->created_at)->format('F d, Y');
    }

    // Excerpt
    public function getExcerptAttribute()
    {
        return substr(strip_tags($this->content), 0, 100);
    }
}
