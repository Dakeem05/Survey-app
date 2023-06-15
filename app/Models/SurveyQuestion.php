<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SurveyQuestion extends Model
{
    use HasFactory;

    protected $fillable =['id', 'question', 'survey_id', 'type', 'data', 'description'];

    public function survey () 
    {
        return $this->belongsTo(Survey::class);
    }
}
