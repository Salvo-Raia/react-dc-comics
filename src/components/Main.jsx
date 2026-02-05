import comics from "./comics";

export default function Main () {

    return <main className=" bg-dark text-white">
        <div className="container text-center py-5">
            <div className="row row-cols-6">
                {comics.map((comicIssue) => 
                    <div key={comicIssue.id} className="col">
                        <div className="comic-card">
                            <img className="img-fluid" src={comicIssue.thumb} title={comicIssue.series} alt={comicIssue.series} />
                            <h3 className="h6 my-3">{comicIssue.series}</h3>
                        </div>
                    </div>
                )}
            </div>
            <button className="btn btn-primary loadmorebtn rounded-0 px-5">Load More</button>
        </div>
    </main>
}