import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import BookList from './components/search/BookList';
import Post from './components/post/Post';

const RouterComponent = () => {




    return (
        <Router>
            {/* This is the parent scene, needed to make the rest work*/}
            <Scene key="root" hideNavBar>
                <Scene key="auth" >
                    <Scene key="login" component={LoginForm} title="Welcome to SYB!" initial/>
                    <Scene key="register" component={RegisterForm} title="Registration"/>
                </Scene>
                <Scene key="main" >
                    <Scene 
                    rightTitle="Post"
                    onRight={() =>  Actions.post()}
                    key="bookList" 
                    component={BookList} 
                    title="Search for a book"
                    initial />
                    <Scene key="post" component={Post} title="Post a book!" />
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent