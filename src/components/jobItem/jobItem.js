import JobItemHeader from './jobItemHeader'
import JobItemBody from './jobItemBody'

function JobItem(props) {

    return (
        <section class='border-2 border-blue-700'>
        <JobItemHeader {...props}/>
        <JobItemBody {...props}/>
        </section>
    )
}

export default JobItem