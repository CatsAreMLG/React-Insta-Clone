import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./Posts.css";

const Posts = props => {
  let time = Math.round(
    (Date.now() - Date.parse(props.posts.timestamp)) / 1000 / 60 / 60 / 24
  );
  if (time > 1) {
    time = Math.round(time / 365);
  }
  let arr = props.posts.map((e, i) => (
    <div className="post" key={`comment-${i}`}>
      <div className="post__header">
        <img className="post__profile" src={e.thumbnailUrl} alt="" />
        <div className="post__name">
          <span>{e.username}</span>
        </div>
      </div>
      <img className="post__image" src={e.imageUrl} alt="" />
      <div className="post__body">
        <div className="post__body__buttons">
          <div className="main--buttons">
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-share-square" />
          </div>
          <i className="far fa-bookmark" />
        </div>
        <span className="post__likes">{e.likes} likes</span>
        <CommentSection comments={e.comments} />
        <span className="post__timestamp">
          {time}
          {" year ago"}
        </span>
      </div>
    </div>
  ));
  return <div className="posts">{arr}</div>;
};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      username: PropTypes.string,
      thumbnailUrl: PropTypes.string,
      imageUrl: PropTypes.string,
      likes: PropTypes.number,
      timestamp: PropTypes.string,
      comments: PropTypes.arrayOf(PropTypes.object)
    })
  )
};

export default Posts;
