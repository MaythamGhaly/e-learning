<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CoursUser extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cours_user', function (Blueprint $table) {

            $table->integer('student_id')->unsigned();

            $table->integer('cours_id')->unsigned();

            $table->foreign('student_id')->references('id')->on('users')

                ->onDelete('cascade');

            $table->foreign('cours_id')->references('id')->on('courses')

                ->onDelete('cascade');
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
        Schema::dropIfExists('role_user');
    }
}
