import {React,useState }from 'react'
import {AiOutlineShoppingCart,AiOutlineClose} from "react-icons/ai";
import {BsFillInfoCircleFill} from "react-icons/bs";
import SearchItem from './SearchItem';
import {IoIosListBox} from 'react-icons/io'
import {AiOutlineFileImage} from 'react-icons/ai'
import Swal from 'sweetalert2';

function NavBar({backehandData}) {
    const [search, setSearch] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const checkUser=async(e)=>{
        const myNewUser = {password,userName};
        console.log(myNewUser);
        const response=await axios.post(API_URL,  { myNewUser })
        if(response){
           window.location.replace('/home');
           console.log(response.data.message)
        }
      }
      const refreshPage = ()=>{
        window.location.replace('/aploadFile');
        }
    console.log(search);
  return (
    <>
    <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark ">
      <h1 className="text-white">Your Logo</h1>
      <div className="collapse navbar-collapse d-flex justify-content-center justify-content-evenly " id="navbarNav">
        <ul className="navbar-nav ">
          <div type="button" className="btn btn-light ml-4" >
          <AiOutlineShoppingCart />
          </div >
          <div type="button" className="btn btn-light ml-4" >
          <IoIosListBox />
          </div >
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
    </nav>
    </>
  )
}

export default NavBar