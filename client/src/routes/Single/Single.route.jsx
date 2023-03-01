import React, { useEffect, useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import DOMPurify from "dompurify";

import Edit from "../../assets/images/edit.png";
import Delete from "../../assets/images/delete.png";

import Menu from "../../components/Menu/Menu.component";

import "./Single.styles.scss";

const Single = () => {
    const [post, setPost] = useState({
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    });

    const location = useLocation();
    const navigate = useNavigate();

    const postId = location.pathname.split("/")[2];

    const currentUser = null;

    const handleDelete = async () => {};

    return (
        <div className="single">
            <div className="content">
                <img
                    src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt=""
                />
                <div className="user">
                    {/* {post.userImg && <img src={post.userImg} alt="" />} */}
                    {
                        <img
                            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                        />
                    }
                    <div className="info">
                        <span>John Wick</span>
                        {/* <p>Posted {moment(post.date).fromNow()}</p> */}
                        <p>Posted 111</p>
                    </div>
                    {/* {currentUser.username === post.username && (
                        <div className="edit">
                            <Link to={`/write?edit=2`} state={post}>
                                <img src={Edit} alt="" />
                            </Link>
                            <img onClick={handleDelete} src={Delete} alt="" />
                        </div>
                    )} */}

                    <div className="edit">
                        <Link to={`/write?edit=2`} state={post}>
                            <img src={Edit} alt="" />
                        </Link>
                        <img onClick={handleDelete} src={Delete} alt="" />
                    </div>
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
