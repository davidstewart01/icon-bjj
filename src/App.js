import logo from './logo.svg';

function App() {
  return (
    <div className="App">

      <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
        <div class="container">
          <a class="navbar-brand" href="#">Icon BJJ</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              {/* <li class="nav-item">
                <a class="nav-link" href="#">Log In</a>
              </li> */}
              
              <li class="nav-item">
                <a class="nav-link" href="#">Chokes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Escapes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Syllabus</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
      {/* <header class="masthead text-center text-white">
        <div class="masthead-content">
          <div class="container">
            <h1 class="masthead-heading mb-0">Icon BJJ Belfast</h1>
            <h2 class="masthead-subheading mb-0">Resources</h2>
            <a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>
          </div>
        </div>
      </header> */}

      <section>
        <div class="container">
          <div class="row align-items-center">
            {/* <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <img class="img-fluid rounded-circle" src="img/choke.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Chokes...</h2>
                <p>Watch the various chokes we've done in class.</p>
              </div>
            </div> */}
            <div class="col-lg-6">
              <div class="p-5">
                <h2 class="display-4">Chokes...</h2>
                <p>Watch the various chokes we've done in class.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="p-5">
                <img class="img-fluid rounded-circle" src="img/escape.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="p-5">
                <h2 class="display-4">Escapes...</h2>
                <p>Watch the various escapes we've done in class.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="p-5">
                <img class="img-fluid rounded-circle" src="img/syllabus.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="p-5">
                <h2 class="display-4">Syllabus...</h2>
                <p>Learn the syllabus.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row align-items-center">
            <iframe width="420" height="315"
              src="https://www.youtube.com/embed/9yvC1N6huKQ?loop=1">
            </iframe>
          </div>
        </div>
      </section> */}

      <footer class="py-5 bg-black">
        <div class="container">
          <p class="m-0 text-center text-white small">Copyright &copy; Icon BJJ Belfast 2021</p>
        </div>
      </footer>

      
    </div>
  );
}

export default App;
