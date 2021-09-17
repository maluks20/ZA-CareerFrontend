import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function Job() {
  const [postData, setPost] = useState(null);

   
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "job"]{
        title,
        jobtitle,
        city,
        province,
        salary,
        date,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  
  console.log(setPost)
  console.log(postData)
  return (
   
      <section className="container mx-auto">
        <h1 className="flex justify-center text-5xl cursive">
          My Blog Posts Page!h
        </h1>
        <div className="border-2 border-green-200">
          {postData &&
            postData.map((job) => (
              <article className='m-6 border border-red-500'>
                <Link to={"/job/" + job.slug.current} key={job.slug.current} className=''>
                  <div>
                      <h3><b>{job.jobtitle}</b></h3>
                      <p>{job.city},  {job.province}</p>
                      <p>{job.description}</p>
                      <h3><b>{job.salary}</b></h3>
                      <p>posted at {job.date}</p>
                      <p>ggugugugu</p>
                  </div>
                </Link>
              </article>
            ))}
        </div>
      </section>
  );
}