export default function Card({thumb, series}) {
thumb = thumb || "src/assets/img/no-cover.jpg"
    return  <div className="col">
              <div className="comic-card">
                <img className="img-fluid" src={thumb} title={series} alt={series} />
                <h3 className="text-start h6 my-3">{series}</h3>
              </div>
            </div>
}; 