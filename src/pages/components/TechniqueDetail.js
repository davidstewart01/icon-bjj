
const sectionStyle = {
  marginTop: '10px'
};

const TechniqueDetail = ({ name, breakDown, iconDemo, youtubeVideos, resources }) => {
  return (
    <>
      <section style={sectionStyle}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col align-text-top">
              <p>{breakDown}</p>
              <br />
              {
                resources && resources.map((resource, index) => (
                  <a href={resource} target="top">Resource {index + 1}</a>
                ))
              }
            </div>
            <div className="col">
              <iframe width="420" height="315" src={`https://www.youtube.com/embed/${iconDemo}`}>
              </iframe>

              { youtubeVideos && youtubeVideos.map(url => (
                  <>
                    <br />
                    <iframe width="420" height="315" src={`https://www.youtube.com/embed/${url}`}>
                    </iframe>
                  </>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TechniqueDetail;
