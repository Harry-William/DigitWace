import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Worker } from 'src/app/worker';


@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  workers:any
  worker = new Worker();
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.getWorkerData();
  }

  getWorkerData(){
   this.dataService.getData().subscribe(res =>{
      this.workers = res;
    })
  }

  insertData(){
    this.dataService.insertData(this.worker).subscribe(res =>{
      this.getWorkerData();
    })
  }

  deleteData(id: any){
    this.dataService.deleteData(id).subscribe(res =>{
      this.getWorkerData();
    })
  }

}
