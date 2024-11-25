
export default function JobList({data}) {
    const jobData = data ;
    if (jobData.length === 0 ) return <p>jobs not found</p>


  return (
    <div className="job-list">
        { jobData && jobData.map((job) => (
            <div key={job.id} className={`job-card ${job.featured ? "feat" : "" }`}>
                <div className="icon">
                    <img src={job.logo} width={80} height={80} />
                </div>
                <div className="info">
                    <div className="company">
                        <h2>{job.company}</h2>
                        {
                            job.new && 
                        <h3 className="new">NEW!</h3>
                        }
                        {job.featured && 
                        
                        <h4 className="featured">Featured</h4>
                        }
                    </div>
                    <div className="job"><h1>{job.position}</h1></div>
                    <div className="time">
                        <div className="added"><p>{job.postedAt}</p></div>
                        <div className="period"><p>{job.contract}</p></div>
                        <div className="location"><p>{job.location}</p></div>
                    </div>
                </div>
                <div className="tags">
                    <span ><h3>{job.role}</h3></span>
                    <span ><h3>{job.level}</h3></span>
                    {job.languages.length !== 0 
                        ? job.languages.map((language, index) => (
                            <span key={index}><h3>{language}</h3></span>
                    )) : " "}

                    {job.tools.length !== 0 
                        ? job.tools.map((tool, index) => (
                            <span key={index}><h3>{tool}</h3></span>
                    )) : " "}
                </div>
            </div>
        )) }

</div>

)
}