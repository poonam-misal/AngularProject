import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {
    chart:any=[];
 chart1:any=[];
 chart2:any

  constructor() { }

  ngOnInit(): void {
    const ctx = 'myChart';
   this.chart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
          datasets: [{
              label: '1st doses',
              data: [12, 19, 3, 5, 2, 3],
             
              
              backgroundColor:
                  'rgba(255, 99, 132, 0.2)',
                
                  
              
                borderColor: 
                    'rgba(255, 99, 132, 1)',
                  
                  
              borderWidth: 1
          },
          {
            label: '2nd doses',
            data: [20, 30, 23, 10, 42, 13],
           
            
            backgroundColor:
                'rgba(255, 99, 132, 0.2)',
              
                
            
              borderColor: 
                  'rgba(255, 99, 132, 1)',
                
                
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });



// for 2nd doses
  const ctx2 = 'myChart2';
  this.chart2 = new Chart(ctx2, {
     type: 'line',
     data: {
         labels: ['jan', 'Feb', 'March', 'April', 'May', 'June'],
         datasets: [{
             label: '2nd doses',
             data: [20, 24, 10, 40, 33, 13],
            
             
             backgroundColor:
                 'rgba(255, 99, 132, 0.2)',
               
                 
             
               borderColor: 
                //    'rgba(255, 99, 132, 1)',

                'blue',
                 
                 
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 });


//for pie chart
  const ctx1 = 'myChart1';
   this.chart1 = new Chart(ctx1, {
      type: 'pie',
      data: {
          labels: ['18-44', '45-60', 'above 60'],
          datasets: [{
              label: '# of Votes',
              data: [30, 30, 40],
              
              backgroundColor: 
                //   'rgba(255, 99, 132, 0.2)',
                ['coral','blue','gray'],
                
                  
              
                borderColor: 
                    'rgba(255, 99, 132, 1)',
                  
                  
              borderWidth: 1
          }]
      },
    //   options: {
    //       scales: {
    //           y: {
    //               beginAtZero: true
    //           }
    //       }
    //   }
  });


  }

}
