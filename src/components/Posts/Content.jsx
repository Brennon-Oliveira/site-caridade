import style from "../../styles/components/Posts/Content.module.css";
import SendPost from "./SendPost";
import Post from "./Post";
import { useEffect, useState } from "react";

export default function Content() {
    const [posts, setPosts] = useState([]);
    const [executions, setExecutions] = useState(0);

    useEffect(() => {
        const getPosts = [
            {
                id: "fsjf198hf9fhsdajfh980",
                username: "Roberto da Silva Lopes",
                isLiked: true,
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent ac.",
            },
            {
                username: "Junior Afonso Oliveira",
                isLiked: false,
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget odio nisi. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin dapibus nulla est, id fringilla ligula malesuada et. Vivamus gravida varius orci, eu scelerisque nisl maximus non. Pellentesque ut placerat ipsum.",
            },
            {
                id: "fsf134h13rgf9fhsdajfh980",
                username: "António Rodrigues",
                isLiked: true,
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis elit, dictum a velit sed, accumsan bibendum ex. Nunc risus arcu, dictum id rhoncus eget, accumsan nec orci. Praesent ac.",
            },
            {
                id: "fsjf19g134gwdf143f980",
                username: "Rodrigo Silveira",
                isLiked: false,
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget odio nisi. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin dapibus nulla est, id fringilla ligula malesuada et. Vivamus gravida varius orci, eu scelerisque nisl maximus non. Pellentesque ut placerat ipsum.",
            },
            {
                username: "Gabriel Antunes",
                isLiked: true,
                content:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eget odio nisi. Aliquam erat volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin dapibus nulla est, id fringilla ligula malesuada et. Vivamus gravida varius orci, eu scelerisque nisl maximus non. Pellentesque ut placerat ipsum.",
            },
        ];
        setPosts(getPosts);
    }, []);

    function changeLike(id) {
        const newList = posts.map((item) => {
            if (item.id === id) {
                const updatedItem = {
                    ...item,
                    isLiked: !item.isLiked,
                };

                return updatedItem;
            }

            return item;
        });

        setPosts(newList);
    }

    return (
        <section id={style.content}>
            <SendPost />
            <Posts posts={posts} changeLike={changeLike} />
        </section>
    );
}

const Posts = ({ posts, changeLike }) => {
    return (
        <>
            {posts.map((post) => {
                return (
                    <>
                        <Post
                            id={post.id}
                            username={post.username}
                            isLiked={post.isLiked}
                            content={post.content}
                            image={post.image}
                            changeLike={changeLike}
                        />
                    </>
                );
            })}
        </>
    );
};
