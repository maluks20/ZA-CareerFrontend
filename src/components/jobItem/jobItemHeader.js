

function JobItemHeader(props) {
    return(
        <section class='bg-black'>
        <div class='border-2 bg-purple-400'>
         <h1>{props.jobtitle}</h1>
        </div>
        </section>
    )
}

export default JobItemHeader