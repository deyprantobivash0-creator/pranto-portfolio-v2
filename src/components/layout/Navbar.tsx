import "../../styles/navbar.css";




export default function Navbar() {
  return (
   <nav className="navbar">

    <div className="navbar-container">

        <a href="#home" className="logo">

            <span className="logo-blue">Pranto</span>

            Dey

        </a>

        <div className="nav-links">

            <a href="#about" className="nav-link">
              About
            </a>


         <a href="#services" className="nav-link">
            Services
          </a>

           <a href="#projects" className="nav-link">
            projects
           </a>

           <a href="#Tech Stack" className="nav-link">
             Tech Stack
           </a>

            <a href="#contact" className="nav-link">
              Contact
            </a>

        </div>

        <div className="nav-actions">

            <a
                href="mailto:deyprantobivash0@gmail.com"
                className="nav-button"
            >
                Let's Talk
            </a>

        </div>

    </div>

</nav> 
  );

 
}

