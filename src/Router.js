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
        <Router cardStyle={{backgroundColor:'white'}} >
            {/* This is the parent scene, needed to make the rest work*/}
            <Scene key="root" hideNavBar >
                <Scene key="auth" navigationBarStyle={{backgroundColor:'white'}} titleStyle={{color:'#2E86AB'}}>
                    <Scene key="login" component={LoginForm} title="Welcome to SYB!" initial titleStyle={{color:'#2E86AB'}}/>
                    <Scene key="register" component={RegisterForm} title="Registration" titleStyle={{color:'#2E86AB'}}/>
                </Scene>
                <Scene key="main" navigationBarStyle={{backgroundColor:'white'}} titleStyle={{color:'#2E86AB'}}>
                    <Scene 
                    rightTitle="Post"
                    rightButtonTextStyle={{color:'#2E86AB'}}
                    onRight={() =>  Actions.post(book)}
                    key="bookList" 
                    component={BookList} 
                    title="Search for a book"
                    titleStyle={{color:'#2E86AB'}}
                    initial  
                    />
                    <Scene key="post" component={Post} title="Post a book!"  titleStyle={{color:'#2E86AB'}}/>
                    <Scene key="takePicture" component={CameraComponent} title="Take a picture!" titleStyle={{color:'#2E86AB'}}/>
                </Scene>
                <Scene key="edit" navigationBarStyle={{backgroundColor:'white'}} titleStyle={{color:'#2E86AB'}}>
                    <Scene key="postEdit" component={PostEdit} title="Edit Post"  titleStyle={{color:'#2E86AB'}}/>
                    <Scene key="editPosts" component={EditYourPost} title="Your Posts" initial  titleStyle={{color:'#2E86AB'}}/>
                    <Scene key="takePicture" component={CameraComponent} title="Take a picture!" titleStyle={{color:'#2E86AB'}}/>
                </Scene>
                <Scene key="account" navigationBarStyle={{backgroundColor:'white'}}>
                    <Scene key="accountEdit" component={AccountEditForm} title="Edit Account" initial titleStyle={{color:'#2E86AB'}}/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;