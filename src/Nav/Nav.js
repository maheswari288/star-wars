import "./Nav.css";
import {Link} from 'react-router-dom';

function Nav(){
   return(

       <div  className="navbarcss">
           <div  className="title"><h1>Star Wars Universe</h1></div>
           <div className="menu">
           <Link  className="home" to="home">Home</Link>
         
          <button   className="btn"><i class="animation"></i> <Link to="/Next">Next</Link><i class="animation"></i></button>
         
   
       </div>

     
   </div>
   );
}


export default Nav;