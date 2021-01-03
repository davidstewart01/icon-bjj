import {Link} from 'react-router-dom'

function Home() {
  return (
    <>
    <header className="masthead text-center text-white">
        <div className="masthead-content">
          <div className="container">
            <h1 className="masthead-heading mb-0">Icon BJJ Belfast</h1>
            <h2 className="masthead-subheading mb-0">Resources</h2>
            <Link to="/syllabus" className="btn btn-primary btn-xl rounded-pill mt-5">Syllabus</Link>
          </div>
        </div>
      </header>
      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
                <img className="img-fluid rounded-circle" src="img/cartoon-choke.jpg" alt="" />
            </div>
            <div className="col">
              <h4>Chokes</h4>
              Watch the various chokes we've done in class.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
                <img className="img-fluid rounded-circle" src="img/cartoon-triangle.jpeg" alt="" />
            </div>
            <div className="col">
              <h4>Submissions</h4>
              Watch the various submissions we've done in class.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
                <img className="img-fluid rounded-circle" src="img/cartoon-escape.jpg" alt="" />
            </div>
            <div className="col">
              <h4>Escapes</h4>
              Watch the various escapes we've done in class.
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
                <img className="img-fluid rounded-circle" src="img/cartoon-black-belt.jpg" alt="" />
            </div>
            <div className="col">
              <h4>Syllabus</h4>
              Have a look at the syllabus.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
