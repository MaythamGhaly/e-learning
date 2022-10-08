<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class SubmitAssignment extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('submit_assignment', function (Blueprint $table) {

            $table->integer('submit_id')->unsigned();

            $table->integer('assignment_id')->unsigned();

            $table->foreign('submit_id')->references('id')->on('submits')

                ->onDelete('cascade');

            $table->foreign('assignment_id')->references('id')->on('assignments')

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
        Schema::dropIfExists('submit_assignment');
    }
}
