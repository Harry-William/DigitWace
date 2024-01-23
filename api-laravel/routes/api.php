<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WorkerController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Get all worker
Route::get('worker', [WorkerController::class ,'getWorker']);

// Get Specic Worker detail
Route::get('worker/{id}', [WorkerController::class, 'getWorkerById']);

// Add Worker
Route::post('addWorker', [WorkerController::class, 'addWorker']);

// Update Worker
Route::put('updateWorker/{id}', [WorkerController::class, 'updateWorker']);

// Delete Worker
Route::delete('deleteWorker/{id}', [WorkerController::class ,'deleteWorker']);


