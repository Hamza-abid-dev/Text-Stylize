import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      </ul>
      <div class="dropdown mx-5">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Theme
  </button>
  <ul class="dropdown-menu">
    <li><div className={`form-check form-switch text-${props.color2==='light'?'dark':'dark'} mx-4 `}>
  <input className="form-check-input" onClick={props.toggleColor2} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.color2==='light'? 'DARK':'DARK'}</label>
</div></li>
    <li><div className={`form-check form-switch text-${props.color==='light'?'dark':'dark'} mx-4 `}>
  <input className="form-check-input" onClick={props.toggleColor} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.color==='light'? 'RED':'RED'}</label>
</div></li>
    <li><div className={`form-check form-switch text-${props.color1==='light'?'dark':'dark'} mx-4 `}>
  <input className="form-check-input" onClick={props.toggleColor1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.color1==='light'? 'GREEN':'GREEN'}</label>
</div></li>
<li><div className={`form-check form-switch text-${props.mode==='light'?'dark':'dark'} mx-4 `}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault">{props.mode==='light'? 'BLUE':'BLUE'}</label>
</div></li>
  </ul>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}
export default Navbar
