import React from 'react'

const blogData = [
{    id: 1,
    slug:"top",
    desc: "top commpany"},

{    id: 2,
    slug:"pop",
    desc: "top uunixosl"},
]

export default function blogs({params}: {params:{slug : string}}) {
    const seletBlogs = blogData.filter((item)=>item.slug === params.slug)
  return (
    <div>
      Multi Blogs Single Page
      {seletBlogs[1]?.desc}

    </div>
  )
}
