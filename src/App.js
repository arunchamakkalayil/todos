
import react , {useState} from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import './App.css';
import Cards from './components/Cards'
import cardData from './components/CardData'



function App() {
let [favImages, setFavImages] = useState([])
let [remImages,setRemImages] = useState([])


 function getFav(img) {
   setFavImages([...favImages,img])

 
   
     
 }

 function removeFav(img){
   setRemImages([...remImages, ""])
 }
let userFavImages= favImages.map((img)=>{
   return(
 
     
     <img src={img} />

   )
 })

 let card= cardData.map((cardItem) => {
    console.log(cardItem.email);
    return(
      <Cards
       cardContent={
       {
         img:cardItem.img,
        name:cardItem.name,
        phone:cardItem.phone,
        email:cardItem.email
      } 
      

      }
      selected={
        getFav
      }
      remove={
        removeFav
      }

      />
    )
  });

  return (
<div className="container">
  <Header />
  <Hero />
  
  <label id="destinations">Destinations</label>
  
  <h3 id="favourates">Favourates</h3>
<div id="fav">
  <aside>
  {userFavImages}
</aside>
</div>

<div className='card-content'>
  {card}
 
  </div>

 
 <Footer />
</div>

  );
}

export default App;
