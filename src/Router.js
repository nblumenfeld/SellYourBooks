import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import RegisterForm from './components/auth/RegisterForm';
import LoginForm from './components/auth/LoginForm';
import BookList from './components/search/BookList';
import Post from './components/post/Post';
import EditYourPost from './components/edit-posts/EditYourPost';
import PostEdit from './components/edit-posts/PostEdit';
import AccountEditForm from './components/auth/AccountEditForm';
import ViewPost from './components/search/ViewPost';
import CameraComponent from './components/post/Camera';
import {bookInitialize} from './actions';

const book = {
    title:'',
    author:'',
    edition:'',
    courseId:'',
    condition:'',
    price:'',
    picture:'',
    notes:''
};

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
                    leftTitle="Your Posts"
                    rightTitle="Post"
                    onLeft={() => Actions.editPosts()}
                    onRight={() =>  Actions.post(book)}
                    key="bookList" 
                    component={BookList} 
                    title="Search for a book"
                    initial />
                    <Scene key="post" component={Post} title="Post a book!" />
                    <Scene key="postEdit" component={PostEdit} title="Edit Post" />
                    <Scene key="editPosts" component={EditYourPost} title="Your Posts" rightTitle="Edit Account" onRight={() => Actions.accountEdit()} />
                    <Scene key="accountEdit" component={AccountEditForm} title="Edit Account"/>
                    <Scene key="takePicture" component={CameraComponent} title="Take a picture!"/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;