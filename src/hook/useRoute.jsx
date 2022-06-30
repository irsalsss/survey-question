import { useNavigate } from 'react-router-dom';

const useRoute = () => {
  const navigate = useNavigate();
  const goTo = (event, url = '/') => {
    navigate(typeof event === 'string' ? event : url);
  }

  return {
    goTo
  }
}

export default useRoute;