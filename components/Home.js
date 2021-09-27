import Menu from '../components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Alert
} from 'reactstrap';


const altura = {
  height: '100vh',
  marginLeft: '13%'
  
};




function Home() {
  return (
  
      
      <div  style={altura}> 
        <Menu> </Menu>
        <div className=" h-100 m-2"> 
          <div>
            teste  
          </div>  
        </div>
      </div>
  )
      
}

export default Home;