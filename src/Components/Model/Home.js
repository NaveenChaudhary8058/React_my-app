import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(()=>{
    handleShow(true)
  },[])

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <div className='container'>
        <div className='row'>
          <div className='col-6 col-md-6 col-lg-4 mt-5'>
            <img src='https://pixels.com/images/homepage/ourProductsAcrylic002.jpg' alt='sher'/>
          </div>
          <div className='col-6 col-md-6 col-lg-8 mt-5'>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at  <br/>its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,<br/> as opposed to using 'Content here, content here', making it look like readable English.<br/> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br/>and a search for 'lorem ipsum' will uncover many web sites still in their infancy. <br/>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at  <br/>its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,<br/> as opposed to using 'Content here, content here', making it look like readable English.<br/> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, <br/>and a search for 'lorem ipsum' will uncover many web sites still in their infancy. <br/>Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
            <br/>its layout.The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,<br/> as opposed to using 'Content here, content here', making it look like readable English.<br/> Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Home;