<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pages', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('app_id');
            $table->unsignedInteger('order')->default(1);
            $table->boolean('status')->default(true);
            $table->string('title');
            $table->string('type');
            $table->binary('featured_image')->nullable();
            $table->text('content')->nullable();
            $table->text('above_content')->nullable();
            $table->text('below_content')->nullable();
            $table->string('business_name')->nullable();
            $table->string('business_tagline')->nullable();
            $table->text('business_description')->nullable();
            $table->string('business_email')->nullable();
            $table->string('business_phone')->nullable();
            $table->string('business_street_1')->nullable();
            $table->string('business_street_2')->nullable();
            $table->string('business_city')->nullable();
            $table->string('business_county')->nullable();
            $table->string('business_country')->nullable();
            $table->string('business_postcode')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pages');
    }
}
