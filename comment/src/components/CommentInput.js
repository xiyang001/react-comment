/**
 * Created by Wenba on 2017/6/2.
 */
import React ,{Component} from 'react'
import PropTypes from 'prop-types'
export default class CommentInput extends Component{
    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }
    static defaultProps = {
        username: ''
    }
    constructor(props){
        super(props);
        this.state={
            username:props.username, // 从 props 上取 username 字段
            content:''
        }
    }
    componentDidMount(){
        this.textarea.focus()
    }

    handleUsernameBlur (e) {
        if (this.props.onUserNameInputBlur) {
            this.props.onUserNameInputBlur(e.target.value)
        }
    }
    handleUserNameChange(e){
        this.setState({
            username:e.target.value
        })
    }
    handleContentChange(e){
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state;
            this.props.onSubmit({
                username: username,
                content: content,
                createdTime: +new Date()
            })
        }
        this.setState({
            content:''
        })
    }
    render(){
        return (
            <div className='comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名：</span>
                    <div className='comment-field-input'>
                        <input
                            value={this.state.username}
                            onBlur={this.handleUsernameBlur.bind(this)}
                            onChange={this.handleUserNameChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容：</span>
                    <div className='comment-field-input'>
                        <textarea
                            ref={(textarea) => this.textarea = textarea}
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}
                        />
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )

    }
}