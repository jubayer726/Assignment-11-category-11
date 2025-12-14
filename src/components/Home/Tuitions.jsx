import Card from './Card'
import Container from '../Shared/Container'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import LoadingSpinner from '../Shared/LoadingSpinner'
import { Link } from 'react-router'

const Tuitions = () => {
  const { data: tuitions = [], isLoading} = useQuery({
  queryKey: ["approvedTuitions"],
  queryFn: async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/tuitions/approved`);
    return res.data;
      },
    });
  if(isLoading) <LoadingSpinner></LoadingSpinner>

  return (
    <Container>
      <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Tuition Listings
          </h2>
          <p className="text-gray-600 mt-2">
            Find the best tuition that matches your learning needs
          </p>
        </div>
      {
        tuitions && tuitions.length > 0? 
      <div className='pt-12 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {
          tuitions.map(stdn=><Card key={stdn._id} stdn={stdn} />)
        }
       
        
      </div>
      : null
      }
      <div className='flex justify-center'>
        <Link to ='/tuitions' className='btn p-5 m-10 bg-info text-white font-bold'>Show More</Link>
      </div>
    </Container>
  )
}

export default Tuitions
