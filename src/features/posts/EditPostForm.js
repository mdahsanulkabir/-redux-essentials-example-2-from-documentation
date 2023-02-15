import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUpdated } from "./postsSlice";


const EditPostForm = () => {
    let params = useParams();
    const { postId } = params

    const post = useSelector(state =>
        state.posts.find(post => post.id === postId)
    )

    const [ title, setTitle ] = useState(post.title)
    const [ content, setContent ] = useState(post.content)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)

    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postUpdated({id : postId, title, content}))
            navigate(`/posts/${postId}`)
        }
    }
    return (
        <section>
            <h2>Edit Post</h2>
            <form >
                <label htmlFor="postTitle">Post Title:</label>
                <input type="text" id="postTitle"
                    name="postTitle" placeholder="What's on your mind?"
                    value={title} onChange={(e) => onTitleChanged(e)}
                />
                <label htmlFor="postContent">Content :</label>
                <textarea name="postContent" id="postContent"
                value={content} onChange={(e) => onContentChanged(e)}/>
            </form>
            <button type="text" 
                onClick={() => onSavePostClicked()}>Save Post</button>
        </section>
    );
};

export default EditPostForm;