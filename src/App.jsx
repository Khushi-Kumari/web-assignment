import "./App.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import logo from "./images/logo.png";
import topic from "./images/topic.png";
import watch1 from "./images/watch1.webp";
import watch2 from "./images/watch2.webp";
import watch3 from "./images/watch3.jfif";
import s1 from "./images/s1.jpg"
import s2 from "./images/s2.jpg"
import s3 from "./images/s3.jfif"

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Watch
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item px-3">
                <a className="nav-link white" aria-current="page" href="#">
                  Live Bids
                </a>
              </li>
              <li className="nav-item  px-3 ">
                <a className="nav-link  white" href="#">
                  <i className="fa fa-user fa-lg" aria-hidden="true"></i>
                </a>
              </li>
              <li className="nav-item px-3 ">
                <a className="nav-link white" href="#">
                  Help & Support
                </a>
              </li>
            </ul>
            <form className="d-flex justify-content-center">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-danger orange" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="th-container">
        <div className="row align-items-center pt-3 ">
          <div className="col-3 text-end">
            <span>
              <img
                src={logo}
                alt=""
                className=" "
                style={{ heigth: "100px", width: "100px", zIndex: "-1" }}
              />
            </span>
          </div>
          <div className="col text-center">
            <span className="h1 text-center ">All Bids From Merchants </span>
          </div>
        </div>
        <div className="text-center h5 pt-5">20% off on winter sales !!</div>
      </div>

      <div className="bg-light">
        <div className="th-container row align-items-center">
          <div className="col-lg-5 col-12 col-md-4 text-center ">
            <img
              src={topic}
              alt=""
              className=" "
              style={{ width: "260px", heigth: "260px", zIndex: "-1" }}
            />
          </div>
          <div className="col-lg-5 col-md-4 text-center text-md-start py-5 pb-md-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            magni voluptas! Culpa optio sint possimus nesciunt odit, amet
            similique molestiae tenetur velit. Laudantium, atque.
            <div className="h5">Rs 39,000</div>
            <div className="h6">qty:2</div>
            <div className="img-fluid" style={{ textDecoration: "underline" }}>
              All Details
            </div>
          </div>
          <div className="col-lg-2 col-md-4 text-center ">
            <div className="h4">Status</div>
            <div className="h6">Time Remaining</div>
            <div className="text-danger h5">26 sec</div>
          </div>
        </div>
      </div>

      <div className="th-container py-5 ">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4 py-5 pe-lg-3 ">
            
            
            
            <div className="d-flex justify-content-center ">
            <div className="">
            Watxhmart Street-4 Shop
            <br/>
            <div className="h3 orange">Rs 35,000</div>
            <div>
            Delivery & Services
            <br />
            <div className="h6">Express Delivery <br /> Return Options</div>
            </div>
            
            </div>
            <img src= {s1} alt="" className="" style={{height:"150px",width:"150px",borderRadius:"100%"}} />
            </div>
            
            
            
            
            
            
            <div className="">
              <button className="btn btn-success text-white py-2">
                Extra Offers
              </button>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              labore natus vel.
            </div>
            <div className="text-center">
              <button className="btn bg-orange h4 text-white">Buy Now</button>
            </div>
            Alternate Product
            <div className="bg-light d-flex d-lg-block">
              <div className="">
                <img
                  src={watch1}
                  alt=""
                  className=""
                  style={{ height: "100px", weidth: "100px" }}
                />
              </div>
              <div classNmae="">
                <span classNmae="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis velit explicabo vitae animi odit fuga.
                </span>
                <br />
                <span className="oramge h4">Rs 34,000</span>{" "}
                <button className="btn bg-orange text-white">Order Now</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-5 px-lg-3">




<div className="d-flex justify-content-center">
            <div className="">
            Watxhmart Street-4 Shop
            <br/>
            <div className="h3 orange">Rs 35,000</div>
            <div>
            Delivery & Services
            <br />
            <div className="h6">Express Delivery <br /> Return Options</div>
            </div>
            
            </div>
            <img src= {s2} alt="" className="" style={{height:"150px",width:"150px",borderRadius:"100%"}} />
            </div>







            <div className="">
              <button className="btn btn-success text-white">
                Extra Offers
              </button>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              labore natus vel.
            </div>
            <div className="text-center">
              <button className="btn bg-orange h4 text-white">Buy Now</button>
            </div>
            Alternate Product
            <div className="bg-light d-flex d-lg-block">
              <div className="">
                <img
                  src={watch2}
                  alt=""
                  className=""
                  style={{ height: "100px", weidth: "100px" }}
                />
              </div>
              <div classNmae="">
                <span classNmae="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis velit explicabo vitae animi odit fuga.
                </span>
                <br />
                <span className="oramge h4">Rs 34,000</span>{" "}
                <button className="btn bg-orange text-white">Order Now</button>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4 py-5 ps-lg-3">




<div className="d-flex justify-content-center ">
            <div className="">
            Watxhmart Street-4 Shop
            <br/>
            <div className="h3 orange">Rs 35,000</div>
            <div>
            Delivery & Services
            <br />
            <div className="h6">Express Delivery <br /> Return Options</div>
            </div>
            
            </div>
            <img src= {s3} alt="" className="" style={{height:"150px",width:"150px",borderRadius:"100%"}} />
            </div>










            <div className="">
              <button className="btn btn-success text-white">
                Extra Offers
              </button>
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              labore natus vel.
            </div>
            <div className="text-center">
              <button className="btn bg-orange h4 text-white">Buy Now</button>
            </div>
            Alternate Product
            <div className="bg-light d-flex d-lg-block">
              <div className=" text-start ">
                <img
                  src={watch3}
                  alt=""
                  className="text-start"
                  style={{ height: "100px", weidth: "100px" }}
                />
              </div>
              <div classNmae="">
                <span classNmae="">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Perspiciatis velit explicabo vitae animi odit fuga.
                </span>
                <br />
                <span className="oramge h4">Rs 34,000</span>{" "}
                <button className="btn bg-orange text-white">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
