<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Worker;

class WorkerController extends Controller
{
    public function getWorker() {
        return response()->json(Worker::all(), 200);
    }


    public function getWorkerById($id) {
        $worker = Worker::find($id);
        if(is_null($worker)) {
            return response()->json(['message' => 'Worker Not Found'], 404);
        }
        return response()->json($worker::find($id), 200);
    }

    public function addWorker(Request $request) {
        $worker = Worker::create($request->all());
        return response($worker, 201);
    }

    public function updateWorker(Request $request, $id) {
        $worker = Worker::find($id);
        if(is_null($worker)) {
            return response()->json(['message' => 'Worker Not Found'], 404);
        }
        $worker->update($request->all());
        return response($worker, 200);
    }

    public function deleteWorker(Request $request, $id) {
        $worker = Worker::find($id);
        if(is_null($worker)) {
            return response()->json(['message' => 'Worker Not Found'], 404);
        }
        $worker->delete();
        return response()->json(null, 204);
    }
}
