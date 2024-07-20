import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({digito1, digito2, digito3, digito4, digito5, digito6}) => {
		return (
		<div className="text-center">
			<div className="row align-items-start bg-dark m-5">
				<div className="col m-4 bg-white bg-opacity-10 text-white d-flex justify-content-center align-items-center fs-1 rounded" style={{height: "200px"}}><i className="fas fa-clock"></i></div>
    			<div className="col m-4 bg-white bg-opacity-10 text-white d-flex justify-content-center align-items-center fs-1 rounded" style={{height: "200px"}}>{digito6}</div>
				<div className="col m-4 bg-white bg-opacity-10 text-white d-flex justify-content-center align-items-center fs-1 rounded" style={{height: "200px"}}>{digito5}</div>
   				<div className="col m-4 bg-white bg-opacity-10 text-white d-flex justify-content-center align-items-center fs-1 rounded" style={{height: "200px"}}>{digito4}</div>
				<div className="col m-4 bg-white bg-opacity-10 text-white d-flex justify-content-center align-items-center fs-1 rounded" style={{height: "200px"}}>{digito3}</div>
				<div className="col m-4 bg-white bg-opacity-10 text-white d-flex justify-content-center align-items-center fs-1 rounded" style={{height: "200px"}}>{digito2} </div>
  				<div className="col m-4 bg-white bg-opacity-10 text-white d-flex justify-content-center align-items-center fs-1 rounded" style={{height: "200px"}}>{digito1}</div>
 			</div>
		</div>
	);
};

export default Home;
