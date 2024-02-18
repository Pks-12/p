/* eslint-disable jsx-a11y/img-redundant-alt */
import profilepic from './a1.png'
function Cards(){
    return(
      <div className="card">
        <img  className="card-image"src={profilepic} alt="pawan"></img>
        <h2 className="card-title">ICC Cricket</h2>
        <p className="card-text">Hello to watch the cricekt game gothrough the jio cineam</p>
      </div> 
    );
}
export default Cards;