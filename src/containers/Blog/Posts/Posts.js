import React, { Component } from 'react';

import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                const posts = response.data.slice(0,4); //get four data from URL
                const updatedPosts = posts.map(post => {
                    return ({
                        ...post,
                        author: 'Max'
                    });
                })
                this.setState({posts: updatedPosts})
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    postSelectedHandler = (id) => {
        //this.props.history.push('/posts/' + id);    alternate way instead of Link (go to the route after certain operation finishes)
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if(!this.state.error) {
            posts = this.state.posts.map(post => {
                return(
                    <Link to={'/posts/' + post.id} key={post.id}>
                        <Post  
                            title={post.title}
                            author={post.author}
                            //clicked={() => this.postSelectedHandler(post.id)}
                        />
                    </Link>
                )
            });
        }
        return (
            <div>
            <section className="Posts">
                {posts}
            </section>
            <Route path={this.props.match.url + '/:id'} component={FullPost}/>
            </div>
        )
    }
}

export default Posts;