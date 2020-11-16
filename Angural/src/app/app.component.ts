import { Component ,AfterContentInit, ViewChild, ElementRef } from '@angular/core';
import { NgwWowService} from 'ngx-wow';


declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements AfterContentInit{

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  
  title = 'app1';

  @ViewChild('carousel') el:ElementRef;

  ngAfterContentInit(): void {

  

    
    $('.slider-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      dots:false,
      rtl:true,
      autoplay:1000,
      autoplayHoverPause:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          1000:{
              items:1
          }
      }
  })


    
   
    $('.themes-carousel').owlCarousel({
      loop:true,
      margin:10,
      nav:false,
      autoplay:true,
      autoplayTimeout:1000,
      autoplayHoverPause:true,
      rtl:true,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:2
          },
          1000:{
              items:5
          }
      }
  })


  $(".member").click(function(){

    var $member = $(this);
    var name = $member.children('span.name').text();
    var img = $member.children('img').attr('src');
    var title = $member.data('title');
   $('.mainsec h3').text(name);
   $('.mainsec span.title').text(title);
   $('.mainsec img').attr('src',img);
   
   
   console.log(name);
   console.log(title);
   console.log(img);

  })


  


   





  
   
  }

   ngOnInit () 
  {
  
  this.wowService.init();
  }

  reset() {
    this.wowService.init();
  }

 
}



