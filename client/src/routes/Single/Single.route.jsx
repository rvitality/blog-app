import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";

import Menu from "../../components/Menu/Menu.component";

import { useAuthContext } from "../../context/AuthContext";

import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";

import "./Single.styles.scss";

const Single = () => {
    const { currentUser } = useAuthContext();

    const [post, setPost] = useState({});

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get(`/api/posts/${postId}`);
                setPost(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPosts();
    }, []);

    const handleDelete = async () => {
        try {
            await axios.delete(`/api/posts/${postId}`);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };

    const getText = html => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent;
    };

    return (
        <div className="single">
            <div className="content">
                <img src={`../upload/${post?.img}`} alt={post.title} />
                <div className="user">
                    {post.userImg && <img src={post.userImg} alt={post.username} />}
                    <div className="info">
                        <span>{post.username}</span>
                        <p>Posted {moment(post.date).fromNow()}</p>
                    </div>
                    {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write?edit=2`} state={post}>
                                <img src={Edit} alt="" />
                            </Link>
                            <img onClick={handleDelete} src={Delete} alt="" />
                        </div>
                    )}
                </div>
                <h1>{post.title}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(post.desc),
                    }}
                ></p>{" "}
            </div>
            <Menu cat={post.cat} />
        </div>
    );
};

export default Single;
