import { useNavigate } from 'react-router-dom';

const useRoute = () => {
  const navigate = useNavigate();
  const goTo = (url = '/') => {

    navigate(`/survey-question${url}`);
  }

  return {
    goTo
  }
}

export default useRoute;