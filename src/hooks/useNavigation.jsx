import { useHistory } from 'react-router-dom';

export const useNavigation = () => {
  const history = useHistory();

  return {
    navigate: (where) => {
      if (where.match(/^http[s]?:\/\//)) {
        window.location = where;
        return;
      }
      if (where !== history.location.pathname) {
        history.push(where);
      }
    },
    makeNavigation: (where) => () => {
      if (where.match(/^http[s]?:\/\//)) {
        window.location = where;
        return;
      }
      if (where !== history.location.pathname) {
        history.push(where);
      }
    },
  };
};
