import Card from "./Card";

export default function Main ({comics}) {

    return <main className=" bg-dark text-white">
        <div className="container text-center py-5">
            <div className="row row-cols-6 gy-4">
                {comics.map((comicIssue, index) =>
                <Card key={index} thumb={comicIssue.thumb} series={comicIssue.series} />
                )}
            </div>
            <button className="btn btn-primary loadmorebtn rounded-0 px-5">LOAD MORE</button>
        </div>
    </main>
}