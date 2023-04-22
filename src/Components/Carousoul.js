

const Carousoul = ()=>{
    return(
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id="carousel" >
    <div className='carousel-caption' style={{zIndex:"1"}}>
    <form class="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light bg-danger"  type="submit">Search</button>
      </form>
    </div>
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/300x300/?burger" className="d-block w-100" style = {{filter: 'brightness(20%)'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300x300/?samosa" className="d-block w-100" style = {{filter: 'brightness(20%)'}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/300x300/?pizza" className="d-block w-100" style = {{filter: 'brightness(20%)'}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    )
}

export default Carousoul;