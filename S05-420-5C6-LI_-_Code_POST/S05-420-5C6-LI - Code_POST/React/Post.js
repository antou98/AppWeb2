import React, { Component } from 'react'


// source : https://jasonwatmore.com/post/2020/02/01/react-fetch-http-post-request-examples
export class Post extends Component {


    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "title": "event POST",
                "date": "2020-12-01"
            },)
        };
        fetch('http://localhost:8081/addEvent', requestOptions)
            .then(res => {console.log(res.status)})
    }

    render() {
        return (
            <div>
                <h1>Voir inspect pour voir le code de retour HTTP</h1>
            </div>
        )
    }
}

export default Post
