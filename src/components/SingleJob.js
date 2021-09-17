import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../client.js";
// import imageUrlBuilder from "@sanity/image-url";
// import BlockContent from "@sanity/block-content-to-react";
import JobItem from './jobItem/jobItem'
import Job from './job'

// const builder = imageUrlBuilder(sanityClient);
// function urlFor(source) {
//   return builder.image(source);
// }

export default function JobPost() {
  const [job, setJob] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        jobtitle,
        _id,
        salary,
        industrytype,
        slug,
        mainImage{
          asset->{
            _id,
              url
            }
          },
          body,
          "name": author->name,
          "authorImage": author->image
        }`
      )
      .then((data) => setJob(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!job) return <div>Loading...</div>;
 console.log(job)
 console.log('bye')

  return (
  <section>
    <div className='flex '>
      <div className='w-2/4'> 
      <JobItem 
      jobtitle={job.jobtitle}
      salary={job.salary}
      industryType={job.industryType}
      />
    </div>
    <div className='w-2/4'>
     <p>other side</p>
     <Job/>
    </div>
    </div>
  </section>
  );
}