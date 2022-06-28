import { useNavigate } from 'react-router-dom';

const useRoute = () => {
  const navigate = useNavigate();
  const goTo = (event, url = '/') => {
    navigate(typeof event === 'string' ? event : url);
    console.log('typeof event', typeof event)
  }

  return {
    goTo
  }
}

export default useRoute;