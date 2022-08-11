import React, {useEffect, useState} from 'react'
// import React, { Component } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


// export class News extends Component {    
const News= (props) =>{

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         articles: [],
    //         loading: true,
    //         page: 1,
    //         totalResults: 0
    //     }
    //     
    // }


    // static defaultProps = {
    //     country: 'in',
    //     pageSize: '15',
    //     category: 'general'
    // }
    // static propTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    //     category: PropTypes.string,
    // }

    const capitalizeFirstLetter = (string) => {
    // capitalizeFirstLetter = (string) => {

        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const fetchMoreData = async () => {
    // fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        
        
        setPage(page+1)
        // this.setState({ page: this.state.page + 1 })

        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // this.setState({
        //     articles: this.state.articles.concat(parsedData.articles),
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // });
    };

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)}-Daffodil News`
        updateNews();
        // eslint-disable-next-line
    }, [])
    // async componentDidMount() {
    //     this.updateNews()
    // }

    const updateNews= async () => {
    // async updateNews() {
        
        props.setProgress(20)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;

        setLoading(true)
         // this.setState({ loading: true })
        
        let data = await fetch(url);
        props.setProgress(40)
        let parsedData = await data.json();
        props.setProgress(60)
        setArticles(parsedData.articles)
        setLoading(false)
        setTotalResults(parsedData.totalResults)
        // this.setState({
        //     articles: parsedData.articles,
        //     totalResults: parsedData.totalResults,
        //     loading: false
        // });
        props.setProgress(100)
    }

    // render() {
        return (
            <div className='container my-3 '>
                <h1 className='text-center ' style={{marginTop: '70px'}}> <strong>DAFFODIL NEWS</strong> </h1>
                <h3 className='text-center'> Top Headlines-{capitalizeFirstLetter(props.category)}  </h3>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}>
                    <div className="container">
                        <div className="row">
                            {articles.map((e) => {
                                return <div className="col-md-4 " key={e.url}>
                                    <NewsItem  date={e.publishedAt} title={e.title ? e.title : ""} desc={e.description ? e.description : ""}
                                        imgUrl={e.urlToImage ? e.urlToImage : 'https://chromeunboxed.com/wp-content/uploads/2022/03/11th-gen-lenovo-flex-5i-1.jpg'} newsUrl={e.url}   />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        )
    // }
}

News.defaultProps = {
    country: 'in',
    pageSize: '15',
    category: 'general'
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News

