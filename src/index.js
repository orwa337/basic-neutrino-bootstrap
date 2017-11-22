import $ from 'jquery';
import 'bootstrap/js/src';
import './styles.scss';
import navbar from './templates/navbar.html';

const card = `

        <div class="card" style="width: 20rem;">
        <img class="card-img-top" src="./static/download.svg" alt="Card image cap">
          <div class="card-body">
          <h4 class="card-title">Card title</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>`;

const demoForm = `
<div class="container-fluid">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">${card}</div>
    <div class="col-12 col-md-6 col-lg-4">${card}</div>
    <div class="col-12 col-md-6 col-lg-4">${card}</div>
    <div class="col-12 col-md-6 col-lg-4">${card}</div>
    <div class="col-12 col-md-6 col-lg-4">${card}</div>
    <div class="col-12 col-md-6 col-lg-4">${card}</div>
  </div>
</div>`;

$(() => {
  $('#root')
    .append(navbar)
    .append(demoForm);
});
