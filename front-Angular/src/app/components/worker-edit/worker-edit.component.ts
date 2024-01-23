import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Worker } from 'src/app/worker';
@Component({
  selector: 'app-worker-edit',
  templateUrl: './worker-edit.component.html',
  styleUrls: ['./worker-edit.component.css']
})
export class WorkerEditComponent implements OnInit {

  id:any;
  data:any;
  worker = new Worker
  constructor(private route:ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
  }

  getData(){
    this.dataService.getWorkerById(this.id).subscribe(res => {
      this.data = res;
      this.worker = this.data;
    })
  }

  updateWorker(){
    this.dataService.updateData(this.id, this.worker).subscribe(res => {
    })
  }

}
