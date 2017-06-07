import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

export default class CommentApp extends Component {
    render() {
        return (
            <div className='wrap'>
                <CommentInput />
                <CommentList />
            </div>
        )
    }
}