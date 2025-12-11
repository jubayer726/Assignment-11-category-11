import HeroSection from '../../components/Home/HeroSection/HeroSection'
import OurTutors from '../../components/Home/OurTutors/OurTutors'
import Tuitions from '../../components/Home/Tuitions';


const toutorsPromise = fetch('./tutors.json').then(res=>res.json());
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <Tuitions/>
      <OurTutors toutorsPromise={toutorsPromise}/>
    </div>
  )
}

export default Home
