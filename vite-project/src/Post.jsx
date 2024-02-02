// We always need to import React when declaring a component - 'Post' is the component 
import React from "react";

const Post = () => {
return (
    <div className="post">
    <p>A first post</p>
    <p className="posted-at">Posted last week</p>
    </div>
);
};

export default Post;