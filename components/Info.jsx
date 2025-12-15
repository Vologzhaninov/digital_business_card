export default function Info() {
    return (
        <header>
            <img src="../images/Photo.jpg" alt="Profile photo" />
            <h1>Dmitry Vologzhaninov</h1>
            <h2>Frontend Developer</h2>
            <a href="https://dmitry.website" target="_blank" rel="noreferrer">dvologzhaninov.website</a> 
            <div>
                <button className="email-btn"><img src="../images/Email.png"></img>Email</button>
                <button className="linkedin-btn"><img src="../images/Linkedin.svg"></img>LinkedIn</button>
            </div> 
        </header>
    )
}