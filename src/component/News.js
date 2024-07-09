import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import LoadingBar from 'react-top-loading-bar'
const News = (props) => {
    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalresults, settotalresults] = useState(0);
    const [arrlen, setarrlen] = useState(0);
    const [progress, setprogress] = useState(30);
    document.title = `News App-${capitalize(props.category)}`

    function capitalize(String) {
        return String.charAt(0).toUpperCase() + String.slice(1);
    }
    useEffect(() => {
        const fetchdata = async () => {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=9&apiKey=254bc65c3e1c460dbe7885470ee67d5f&page=${page}`;
            setloading(true);
            setprogress(70);
            let data = await fetch(url);
            let parseddata = await data.json();
            setarticles(parseddata.articles);
            setloading(false);
            settotalresults(parseddata.totalResults);
            setprogress(100);
        }
        fetchdata();
    }, [props.category, page])
    const handlenext = async () => {
        if (!(page + 1 > Math.ceil(totalresults / props.pagesize))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=9&apiKey=254bc65c3e1c460dbe7885470ee67d5f&page=${page + 1}`;
            setloading(true);
            let data = await fetch(url);
            let parseddata = await data.json();
            setloading(false);
            setarticles(parseddata.articles);
            setpage(page + 1);
            settotalresults(parseddata.totalResults);
            setarrlen(arrlen + parseddata.articles.length);
        }
    }
    const handleprevious = async () => {
        if (!(page - 1 === 0)) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&pageSize=9&apiKey=254bc65c3e1c460dbe7885470ee67d5f&page=${page - 1}`;
            setloading(true)
            let data = await fetch(url);
            let parseddata = await data.json();
            setpage(page - 1)
            setarticles(parseddata.articles)
            setloading(false)
        }
    }
    return (
        <>
            <LoadingBar color={'#0d6efd'} progress={progress} />
            <div className='container'>
                <h1 className=' my-3 text-center'>News App - {capitalize(props.category)} Headlines</h1>
                {loading && <Spinner />}
                <div className='row' >
                    {!loading && articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title : 'Notitle'} description={element.description ? element.description : 'Nodescription'} imageurl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/892726222/photo/words-news-on-digital-blue-background.webp?b=1&s=170667a&w=0&k=20&c=pgX2i8yKSFl_8UfF8rGb3Gh5nEtpMoFmnvd9GVPtfoc="} url={element.url} author={element.author ? element.author : "Unknown"} date={new Date(element.publishedAt).toUTCString()} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className='container my-3 d-flex justify-content-between'>
                    <button type="button" disabled={page - 1 === 0} onClick={handleprevious} className="btn btn-primary ">&larr; Previous</button>
                    <button type="button" disabled={page + 1 > Math.ceil(totalresults / props.pagesize) || arrlen === totalresults} onClick={handlenext} className="btn btn-primary ">Next &rarr;</button>
                </div>
            </div>
        </>
    )
}
export default News;