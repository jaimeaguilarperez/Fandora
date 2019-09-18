import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `
  <!-- header -->
  <nav class="navbar">

  <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://bulma.io/images/bulma-logo.png">
        </a>
      </div>
    </nav>
    <!-- routes will be rendered here -->
    <router-outlet></router-outlet>

    <!-- footer -->
    <footer class="footer">
    <div class="container">
    <div class="content has-text-centered">
      <p>
        Made with <3 by <a href="https://twitter.com/chrisoncode">Chris from Scotch</a>
      </p>
    </div>
    </div>
    </footer>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
