import Head from 'next/head';
import Home from '../components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col
} from 'reactstrap';
import SideBar from './sideBar';



export default function Principal() {

  

  return (
        <div >
          
          <Home> </Home>
          <SideBar></SideBar>
        </div>
    
  )
}
