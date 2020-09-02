import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
        //submitted: false //part of alternative method to history.push on line 25
    }

    postDataHandler = () => {
        const newPost = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };

        axios.post("https://jsonplaceholder.typicode.com/posts", newPost)
            .then(response => {
                console.log(response)
                this.props.history.replace('/posts/');
                //this.setState({submitted: true}); part of alternative method to history.push on line 25
            });
           
    }

    render () {
        /*alternative method to history.push on line 25
         let redirect = null;
         if(this.state.submitted) {
             redirect = <Redirect to='/posts/'/>;
         };*/

        return (
            <div className="NewPost">
                {/*  {redirect} //part of alternative method to history.push on line 25 */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;