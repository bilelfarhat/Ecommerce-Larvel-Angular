import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productService: ServiceService) {}
  products: Product[] = [];
  featuredProducts: Product[] = [];
  latestProducts: Product[] = [];
  specialProducts: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
    $('#slideshow').nivoSlider();

    // store the slider in a local variable
    var $window = $(window),
      flexslider;
    // tiny helper function to add breakpoints
    function getGridSize() {
      return window.innerWidth < 320
        ? 1
        : window.innerWidth < 600
        ? 2
        : window.innerWidth < 800
        ? 3
        : window.innerWidth < 900
        ? 4
        : 5;
    }
    $window.load(function () {
      $(
        '#product-tab .featured_carousel_tab, #product-tab .latest_carousel_tab, #product-tab .bestseller_carousel_tab, #product-tab .special_carousel_tab'
      ).flexslider({
        animation: 'slide',
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        minItems: getGridSize(), // use function to pull in initial value
        maxItems: getGridSize(), // use function to pull in initial value
        start: function () {
          $('#product-tab .tab_content').addClass('deactive');
          $('#product-tab .tab_content:first').removeClass('deactive'); //Show first tab content
        },
      });
    });

    $(document).ready(() => {
      //Default Action
      $('ul#tabs li:first').addClass('active').show(); //Activate first tab
    });
    $window.on('load', () => {
      $('#content .featured_carousel').flexslider({
        animation: 'slide',
        animationLoop: false,
        slideshow: false,
        itemWidth: 210,
        minItems: getGridSize(),
        maxItems: getGridSize(),
      });
    });
  }
  handleClick(ref: any) {
    //On Click Event
    $('ul#tabs li').removeClass('active'); //Remove any "active" class
    $(ref).addClass('active'); //Add "active" class to selected tab
    $('#product-tab .tab_content').hide();
    var activeTab = $(ref).find('a').attr('href'); //Find the rel attribute value to identify the active tab + content
    $(activeTab).fadeIn(); //Fade in the active content
    return false;
  }
  getProducts() {
    this.productService.getProduct().subscribe((response: any) => {
      this.products = response.products;
      this.featuredProducts = this.products.slice(0, 10);
      this.latestProducts = this.products.reverse().slice(0, 10);
      this.specialProducts=this.products.filter((product)=> product.quantity>10) ;
    });
  }
}  
