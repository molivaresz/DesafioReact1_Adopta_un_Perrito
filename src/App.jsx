import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyHeader from './components/Header';
import MyCard from './components/MyCard';
import MyFooter from './components/Footer';

function App() {

  return (
    <>
    <div className="grid-container">
      <div className='header'>
        <MyHeader 
        title="Adopta un perrito"
        />
      </div>

      <div className='main'>
        <MyCard 
        dirimgdog="https://cdn.pixabay.com/photo/2016/07/15/15/55/dachshund-1519374_640.jpg"
        namedog="Cachupin"
        descriptiondog="Hermoso cachorro, tierno, fiel. Acompañará y jugará con tus niños"
        dogbreed="Perro Tejonero"
        badgecolor="success"
        />

        <MyCard 
        dirimgdog="https://cdn.pixabay.com/photo/2016/02/11/17/00/dog-1194087_640.jpg"
        namedog="Polin"
        descriptiondog="Obediente, de pelaje brillante, es un amigo fiel"
        dogbreed="Hovawart"
        badgecolor="primary"
        />

        <MyCard 
        dirimgdog="https://cdn.pixabay.com/photo/2015/11/03/12/58/dalmatian-1020790_640.jpg"
        namedog="Toto"
        descriptiondog="Toto es el compañero de aventuras que siempre haz querido a tu lado"
        dogbreed="Dalmata"
        badgecolor="danger"
        />

        <MyCard 
        dirimgdog="https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_640.jpg"
        namedog="Killer"
        descriptiondog="Inteligente y audaz, siempre vigilante"
        dogbreed="Labrador Retriever"
        badgecolor="info"
        />
      </div>
      
      <div className='footer'>
        <MyFooter 
        description="Adopta un perrito nace para dar una segunda oportunidad a cientos de animales que han sido víctimas de maltrato y abandono. Promoviendo el amor, cuidado, respeto y protección al rescatar, recuperar, rehabilitar y entregar en adopción."
        />
      </div>
    </div>
    </>
  )
}

export default App