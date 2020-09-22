import React from 'react'

export default function Footer(props) {
  return (
    <div id="footer">
      <h3 id="copy">&copy; Winston Meikle 2020</h3>
      <a href="https://github.com/Blackstarstorm/Pokedex-R" target="_blank" rel="noopener noreferrer">
        <img className="github" onClick={props.audioTabOut} src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1576006571/makefg.php_z6tyxm.png" alt="GitHub Icon"/>
      </a>
      <a  href="https://www.linkedin.com/in/winston-meikle-4644b5162/" target="_blank" rel="noopener noreferrer">
        <img className="linkedin" onClick={props.audioTabOut} src="https://res.cloudinary.com/dvysqqdqe/image/upload/v1576006711/makefg.php_lmlrff.png" alt="Linkedin Icon"/>
      </a>
      
    </div>
  )
}
