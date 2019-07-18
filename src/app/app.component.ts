import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../services/common-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CommonServiceService]
})
export class AppComponent implements OnInit {
  title = 'clientApp';
  data: any;
  constructor(private commonService: CommonServiceService) {
  }
  ngOnInit(): void {
    console.log('start');
    this.selectAll();
  }

  selectAll() {
    this.commonService.callJunction({}).subscribe(res => {
      if(res){
        this.data = res;
    console.log('=>', this.data);

      }
    });
  }
}
