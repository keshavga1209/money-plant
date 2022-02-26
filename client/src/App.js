
import "./App.css";


function App() {
 
  (function(){
    var d=document; var x=!d.getElementById('razorpay-embed-btn-js')
    if(x){ var s=d.createElement('script'); s.defer=!0;s.id='razorpay-embed-btn-js';
    s.src='https://cdn.razorpay.com/static/embed_btn/bundle.js';d.body.appendChild(s);} else{var rzp=window['__rzp__'];
    rzp && rzp.init && rzp.init()}})();

  return (
    <>
      <div className="app">
     <div className="razorpay-embed-btn" data-url="https://pages.razorpay.com/pl_J0efs16fDfNstS/view" data-text="Donate " data-color="#528FF0" data-size="large">
      </div>
      </div>

    </>
  );
}

export default App;
