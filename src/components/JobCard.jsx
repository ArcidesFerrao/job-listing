import accountIcon from '../assets/images/account.svg'

export default function JobCard() {
  return (
    <div className="job-card">
            <div className="icon">
                <img src={accountIcon} width={80} height={80} />
            </div>
            <div className="info">
                <div className="company"><h2>Account</h2></div>
                <div className="job"><h1>Senior Frontend Developer</h1></div>
                <div className="time">
                    <div className="added"><p>1d ago</p></div>
                    <div className="period"><p>Part Time</p></div>
                    <div className="location"><p>Remote</p></div>
                </div>
            </div>
            <div className="tags">
                <span><h3>Frontend</h3></span>
            </div>
        </div>
  )
}
