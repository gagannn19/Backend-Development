import React, { useState, useEffect } from 'react'
import axios from 'axios'


const Feed = () => {

  const [posts, setPosts] = useState([
    {
      _id : "1",
      image : "https://thumbs.dreamstime.com/b/beautiful-nature-scenery-380932358.jpg",
      caption : "beautiful scenery"
    }
  ])

  useEffect(()=>{

    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts)
    })

  }, [])

  return (
    <section className='feed-section'>
      <h1 className='feed-title'>Feed</h1>
      {
        posts.length > 0 ? (
          <div className="feed-grid">
            {posts.map((post) => (
              <article key={post._id} className="post-card">
                <img src={post.image} alt={post.caption} loading="lazy" />
                <p>{post.caption}</p>
              </article>
            ))}
          </div>
        ) : (
          <h2 className='feed-empty'>No posts available</h2>
        )
      }
    </section>
  )
}

export default Feed
