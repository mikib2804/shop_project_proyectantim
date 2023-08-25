import {React,useState,useEffect }from 'react'
import {AiOutlineShoppingCart,AiOutlineClose} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import SearchItem from './SearchItem';
import {IoIosListBox} from 'react-icons/io'
import {AiOutlineFileImage} from 'react-icons/ai'
import Swal from 'sweetalert2';
import axios from "axios";
import withReactContent from 'sweetalert2-react-content';

import { grey } from '@mui/material/colors';
function NavBar({backehandData,search,setSearch,logedUser,dataToServer,setdataToServer}) {
    const MySwal = withReactContent(Swal);
    const API_URL = 'http://localhost:3000/api/home/prod';
    const [isOpen, setIsOpen] = useState(false);
    const [orders,setOrders]=useState([]);
    const [loading,setloading]=useState(true);
    const [ordersData,setOrdersData]=useState([]);
    const [selectedProd,setSelectedProd]=useState();
    var totalSum=0;
    useEffect(() => {
      GetOrdersFromSrver();
    },[]);
    const GetTotalSum=()=>{
      for (var i = 0; i < dataToServer.length; i++) {
        totalSum+=(dataToServer[i].PriceIt*(dataToServer[i].MyAmount===0?dataToServer[i].MyAmount+1:dataToServer[i].MyAmount));
      } 
      return(totalSum);
    }
    
    const ObjectList=( )=> {
      
      return (
        
        <div>
          <ul>
            {dataToServer.map((object, index) => (
              <div>
              <div className="col-auto d-flex justify-content-start"  key={index}>
              {object.MyAmount+1} {object.NameIt} 
              </div>
              <div className="col-auto d-flex justify-content-end">
              <img src={`data:image/jpeg;base64,${object.BufferIt}`}
                style={{ maxWidth: '40px', maxHeight: '40px' }}/> 
              </div>
            </div>
            ))}
          </ul>
          {GetTotalSum()} ₪
        </div>
      );
    }
    const delay = ms => new Promise(
      resolve => setTimeout(resolve, ms)
    );
    const GetOrdersFromSrver=async ()=>{
      const response=await axios.get(`${API_URL}/order/${logedUser.logedUser._id}`)
      setOrders(response.data);
      setOrdersData(response.data);
      const arrId=[];
      for(var i=0;i<response.data.length;i++){
          arrId.push(response.data[i]._id);
      }
      setOrders(arrId);
      GetUserHistory();
      setloading(false);
      console.log(loading);
    }

  const GetProductItems=(prd)=>{

    let arrImage=[];
    backehandData.map((Ditem, index) => {
      console.log("prd.prd.purchasedItems:",prd.prd.purchasedItems);
      console.log("Ditem._id:",Ditem);
      prd.prd.purchasedItems.map((prdItem, place) => {
        if(prdItem===Ditem._id){
          arrImage.push(Ditem.buffer)
          console.log("hello");
        }
      })
      
    })
    console.log(arrImage)
    return (
      <div>
            <ul>
              {prd.prd.purchasedItems.map((item, index) => (
                <div key={index}>
                <div className="col-auto d-flex justify-content-start "key={index}>
                  <span>Item Id: {item}</span>
                </div>
                <img src={`data:image/jpeg;base64,${arrImage[index]}`}
                style={{ maxWidth: '40px', maxHeight: '40px' }}/> 
              </div>
              ))}
            </ul>
      </div>
    );
  }
const openOrdPrdModal =async(prd) => {

    MySwal.fire({
      title: `${prd._id} Order :`,
      html: <GetProductItems prd={prd}/>,
      showCancelButton: true,
      cancelButtonText: 'Close',
      confirmButtonColor: '#666666',
  
    })}
const GetUserHistory=()=>{
  return (
    <div>
          <ul>
            {ordersData.map((item, index) => (
              <div key={index}>
              <div type="button" className="btn-light col-auto d-flex justify-content-start "key={index}onClick={()=>{setSelectedProd(item),openOrdPrdModal(item)}} >
                <span>Order Id: {item._id}</span>
              </div>
            </div>
            ))}
          </ul>
    </div>
  );
}

const openOrdModal =async() => {
  
  MySwal.fire({
    title: 'My Order List:',
    html: <GetUserHistory/>,
    showCancelButton: true,
    cancelButtonText: 'Close',
    confirmButtonColor: '#666666',

  })}


    const openObjectListModal = () => {
      
      MySwal.fire({
        title: 'My Item List:',
        html: <ObjectList/>,
        showCancelButton: true,
        cancelButtonText: 'Close',
        confirmButtonText: 'Place Order $',
        confirmButtonColor: '#666666',

      }).then((result) => {
        
      if (result.isConfirmed) {
        //i add this function to stop an eror of (PayloadTooLargeError: request entity too large)
        for (var i = 0; i < dataToServer.length; i++) {
          //console.log(dataToServer[i].BufferIt);
          delete dataToServer[i].BufferIt;
        } 
        // console.log(logedUser.logedUser._id);
        const User={idOfUser:logedUser.logedUser._id,LogeduserName:logedUser.logedUser.userName,orderSum:GetTotalSum(),addressOfUser:logedUser.logedUser.address}
        console.log(dataToServer);
        const response= axios.post(API_URL, {User,dataToServer })
        console.log(response);
        if(response){
          Swal.fire('Done!', 'The action was performed.', 'success');
          console.log("order Placed ");
          setdataToServer([]);
          GetOrdersFromSrver();
          totalSum*=0;
        }
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire('Cancelled', 'The action was cancelled.', 'error');
      }
    });
    };
      const refreshPage = ()=>{
        window.location.replace('/aploadFile');
        }
  return (
    <>
    <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark ">
      <h1 className="text-white">My Shop</h1>
      <div className="collapse navbar-collapse d-flex justify-content-center justify-content-evenly " id="navbarNav">
        <ul className="navbar-nav ">
          <div >
          <button type="button" className="btn btn-light ml-4"  onClick={() => {
                openObjectListModal();
            }} >
              <AiOutlineShoppingCart />
            </button >
          
          </div >
          <button type="button" className="btn btn-light ml-4"  onClick={() => {
                GetOrdersFromSrver();
                openOrdModal();
            }} >
              <IoIosListBox/>
            </button >
          <div type="button" className="btn btn-light ml-4" onClick={refreshPage}>
          <AiOutlineFileImage />
          </div >
          <div  >
          <button type="button" className="btn btn-light ml-4"  onClick={() => {
                Swal.fire({
                  icon: 'info',
                  title: 'WebBoutique: The Virtual Emporium of Wonders',
                  text:"In the heart of the digital age, a revolutionary online store emerged that captured the essence of both convenience and enchantment—WebBoutique. This cybernetic emporium was more than just a platform; it was an experience that redefined the way people shopped.Navigating to WebBoutique's sleek interface was like stepping into a realm of endless possibilities. Users were greeted by an interactive cityscape, where every building housed a different category of products. A virtual avatar guided shoppers, showing them around the vibrant streets and directing them to the most unique wares.The visionary mind behind WebBoutique, known as the Digital Curator, meticulously handpicked items from around the world to create an eclectic collection that ranged from rare antiques to futuristic gadgets. Each product came with a captivating backstory, and users could dive deep into the history and craftsmanship with a mere click.Amid the diverse range of shoppers, two characters stood out:emily, a passionate globetrotter, stumbled upon WebBoutique while searching for a memento from her travels. The platform's immersive design not only showcased products but also transported her to the places they originated from. She found herself virtually wandering through bustling marketplaces in far-off lands, experiencing cultures through her screen.Alex, a tech-savvy inventor, was drawn to WebBoutique to showcase his ingenious creations. The platforms emphasis on storytelling allowed him to share the inspiration behind his gadgets, fostering a sense of community among fellow innovators. Soon, Alex's products were flying off the digital shelves, connecting him to customers he never thought possible. As WebBoutique gained popularity, it ignited conversations about the evolution of commerce and the power of storytelling in selling. Emily and Alex symbolized this shift: Emily discovered a way to relive her adventures through curated products, while Alex found a digital stage to showcase his innovations.The WebBoutique story celebrates the fusion of innovation and human connection. It emphasizes that even in a world dominated by screens, the magic of discovery and the art of curation can still evoke wonder. In the ever-expanding digital landscape, WebBoutique stands as a beacon, reminding us that technology, when crafted with imagination, can transport us to places beyond our screens.",
                  showConfirmButton: false,
                  showCloseButton: true,
                })
            }} >
              <BsFillInfoCircleFill/>
            </button >
          </div >
          <li className="nav-item">
          <SearchItem
                    search={search}
                    setSearch={setSearch}   
                />
          
          </li>
        </ul>
      </div>
       <h2 className="text-white">Hello {typeof logedUser===undefined?'Null':logedUser.logedUser.userName} !!</h2>
    </nav>
    </>
  )
}

export default NavBar