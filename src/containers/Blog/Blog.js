import React, { Component } from 'react';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import './Blog.css';

class Blog extends Component {
    state = {
        auth: true
    }
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to='/posts/' exact activeClassName="active">Posts</NavLink></li>
                            <li><NavLink to='/new-post'>New post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path='/new-post' exact component={NewPost}/> : null /*routing guards*/}
                    <Route path='/posts/' component={Posts}/>
                    <Redirect from='/' to='/posts/'/>
                </Switch>
            </div>
        );
    }
}

export default Blog;