import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './text.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Hello() {
  return (
    <div className='Hello'>

      <div class="row d-flex justify-content-center " style={{ marginTop: '10%' }}>
        <div class="card shadow border-0 p-5">
          <div class="card-body">
            <h1 class="font-weight-bold">Hello World</h1>

            <div class="row d-flex justify-content-center mt-3">
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>



            <div class="modal fade " style={{ background: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(5px) ', WebkitBackdropFilter: 'blur(5px)' }} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog border-0 modal-dialog-centered" >
                <div class="modal-content border-0" >
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Greetings</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <div class="text-center">
                      <h3 class="font-weight-bold">Hello World!</h3>
                      <p>My Name Is Auful Kirom</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <div class="text-right" >
        <div class="running-text" style={{ animation: 'slide-left 10s linear infinite', right: '-2000px' }}>
          <p>Hello, I'm Muhammad Auful Kirom</p>
        </div>
      </div>
    </div>
  );
}

export default Hello;

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
