import { useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import styles from '../../styles/Posts.module.css'
import { AddPost } from "./AddPost";

export default function Posts() {

    const [date, setDate] = useState("")

    useEffect(() => {
        const now = new Date()
        const date = now.toLocaleDateString('tr', { weekday:"long", month:"short", day:"numeric"})
        const time = now.toLocaleTimeString('tr', { hour: "2-digit", minute: "2-digit" })

        setDate(`${date} ${time}`)

    }, [date])
    
    return (
        <div className={styles.Posts}>
            <AddPost/>
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere varius elit at elementum. Phasellus sollicitudin, justo sed commodo congue, leo urna auctor mauris, a feugiat libero diam sit amet nisi. Duis cursus rutrum cursus. Aenean ut erat leo. Pellentesque tempor augue at neque venenatis facilisis. Quisque bibendum pulvinar dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere varius elit at elementum. Phasellus sollicitudin, justo sed commodo congue, leo urna auctor mauris, a feugiat libero diam sit amet nisi. Duis cursus rutrum cursus. Aenean ut erat leo. Pellentesque tempor augue at neque venenatis facilisis. Quisque bibendum pulvinar dolor." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere varius elit at elementum. Phasellus sollicitudin, justo sed commodo congue, leo urna auctor mauris, a feugiat libero diam sit amet nisi. Duis cursus rutrum cursus. Aenean ut erat leo. Pellentesque tempor augue at neque venenatis facilisis. Quisque bibendum pulvinar dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere varius elit at elementum. Phasellus sollicitudin, justo sed commodo congue, leo urna auctor mauris, a feugiat libero diam sit amet nisi. Duis cursus rutrum cursus. Aenean ut erat leo. Pellentesque tempor augue at neque venenatis facilisis. Quisque bibendum pulvinar dolor." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere varius elit at elementum. Phasellus sollicitudin, justo sed commodo congue, leo urna auctor mauris, a feugiat libero diam sit amet nisi. Duis cursus rutrum cursus. Aenean ut erat leo. Pellentesque tempor augue at neque venenatis facilisis. Quisque bibendum pulvinar dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus posuere varius elit at elementum. Phasellus sollicitudin, justo sed commodo congue, leo urna auctor mauris, a feugiat libero diam sit amet nisi. Duis cursus rutrum cursus. Aenean ut erat leo. Pellentesque tempor augue at neque venenatis facilisis. Quisque bibendum pulvinar dolor." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
            <PostCard postedAt={date} body="lorem ipsum dolar sit amet consectur." author={{name: 'Hasan Çelikoğlu', username: "@hasancelikoglu0", image: ''}} />
        </div>
    )
}