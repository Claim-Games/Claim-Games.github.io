import { Component, OnInit } from '@angular/core';

const facebookBtn = document.querySelector(".facebook-btn");
const twitterBtn = document.querySelector(".twitter-btn");
const pintrestBtn = document.querySelector(".pintrest-btn");
const linkedInBtn = document.querySelector(".linkedin-btn");
const whatsappBtn = document.querySelector(".whatsapp-btn");

@Component({
  selector: 'app-social-links',
  templateUrl: './social-links.component.html',
  styleUrls: ['./social-links.component.scss']
})
export class SocialLinksComponent implements OnInit {
  /*
  Whatsapp
  https://api.whatsapp.com/send?text=[post-title] [post-url]

  Facebook
  https://www.facebook.com/sharer.php?u=[post-url]

  Twitter
  https://twitter.com/share?url=[post-url]&text=[post-title]

  Pintrest
  https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&description=[post-title]

  LinkedIn
  https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

  */
  constructor() { }
  
  postTitle?:any;
  postUrl?:any;
  postImg?:any;

  ngOnInit(): void {

    facebookBtn?.setAttribute("href", `https://www.facebook.com/sharer.php?u=${this.postUrl}`);
    twitterBtn?.setAttribute("href", `https://twitter.com/share?url=${this.postUrl}&text=${this.postTitle}`);
    pintrestBtn?.setAttribute("href", `https://pinterest.com/pin/create/bookmarklet/?media=${this.postImg}&url=${this.postUrl}&description=${this.postTitle}`);
    linkedInBtn?.setAttribute("href", `https://www.linkedin.com/shareArticle?url=${this.postUrl}&title=${this.postTitle}`);
    whatsappBtn?.setAttribute("href", `https://api.whatsapp.com/send?text=${this.postTitle} ${this.postUrl}`);
  }

}
