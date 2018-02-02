<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->unsignedInteger('page_id');
            $table->unsignedInteger('order')->default(1);
            $table->binary('featured_image')->nullable();
            $table->boolean('status')->default(true);
            $table->string('title');
            $table->string('short_description')->nullable();
            $table->text('description')->nullable();
            $table->decimal('price', 6, 2)->nullable();
            $table->decimal('regular_price', 6, 2)->nullable();
            $table->integer('additional_shipping')->nullable();
            $table->string('sku')->nullable();
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
        Schema::dropIfExists('products');
    }
}
