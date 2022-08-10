import React from 'react'
// import React, { Component } from 'react'

const NewsItem = (props) =>{

// export class NewsItem extends Component {
    // render() {

        let { title, desc, imgUrl, newsUrl, source, date } = props
        // let { title, desc, imgUrl, newsUrl, source, date } = this.props
        return (
            <div className='my-2' >
                <div className="card"  >
                <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'50% ',zIndex:'1'}} >{source}</span>
                    <img src={imgUrl ? imgUrl : "https://s.yimg.com/os/creatr-uploaded-images/2022-07/260d1fe0-0cbd-11ed-bff7-25cdfbfd8873"} className="card-img-top" alt="..." style={{ height: '200px' }} />
                    <div className="card-body">
                        <h5 className="card-title">{title.slice(0, 45)}...</h5>
                        <p className="card-text"><small className="text-muted">{new Date(date).toGMTString()}</small></p>
                        <p className="card-text">{desc.slice(0, 90)}...</p>
                        <a href={newsUrl} rel="noopener noreferrer" target='_blank' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    // }
}

export default NewsItem