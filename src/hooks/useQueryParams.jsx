const { useLocation } = require('react-router-dom');

export const useQueryParams = () => {
  const { search } = useLocation();
  const u = new URLSearchParams(search);

  const params = {};
  for (const [k, v] of u.entries()) {
    if (params[k]) {
      if (Array.isArray(params[k])) {
        params[k] = [...params[k], v];
      } else {
        params[k] = [params[k], v];
      }
      continue;
    }
    params[k] = v;
  }
  return params;
};
