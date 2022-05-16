

function NavBar() {
    return ( 
        <
        div className = "App" >
       <navbar>
           <div class="container">   <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src='https://cybinix.com/cybinix.png' alt='Cybinix' class="Cybinix-logo"></img></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">SignIn</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">SignUp</a>
              </li>
            </ul>
          </div>
        </div>
      </nav></div>
       </navbar>
        </div>
    );
}

export default NavBar;