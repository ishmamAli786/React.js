import React from 'react';
import './App.css';
function App(){
  return (
    <>
    <h1 style={{textAlign:'center'}}>Welcome to Bootstrap  Mini Projects</h1>
    <div class="container">
  <div class="row">
    <div className="col-sm">
    <div className="card">
  <img src="https://picsum.photos/id/237/200/300" height="250px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card">
  <img src="https://picsum.photos/id/237/200/300" height="250px" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div className="card">
  <img src="https://picsum.photos/id/237/200/300" height="250px" className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>
    </>
  )
}
export default App;
