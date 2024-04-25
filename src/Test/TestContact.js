import React, { useEffect, useState } from "react";

const TestContact = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    setData("first");
  }, []);

  return (
    <div>

      <h1 className="text-center mt-5 mb-5" style={{color:"blue",fontWeight:"900"}}>{props.name}</h1>

      <div style={{backgroundColor:"black",paddingLeft:"220px",width:"100%",height:"80vh",paddingTop:"30px"}}>

      <div style={{ display: data === "first" ? "block" : "none" }} className="m-5 w-75 p-5 bg-dark text-white mb-5 ">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="name"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button
          class="btn btn-success w-100 fs-3 py-2"onClick={() => {setData("sec");}}>Signin </button>
      </div>


      {/* Login */}

      <div style={{ display: data === "sec" ? "block" : "none" }}className="m-5 p-5 w-75 bg-dark text-white mb-5">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input type="email"class="form-control"id="exampleInputEmail1"aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPasword" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          onClick={() => {setData("first");}}class="btn btn-danger w-100 fs-3 py-2">
          login
        </button>
      </div>

      </div>





    </div>
  );
};

export default TestContact;
