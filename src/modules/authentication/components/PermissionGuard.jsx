import { useSelector } from 'react-redux';

import { useNavigation } from 'hooks/useNavigation';
import { checkForPermission } from 'modules/authentication/services/Authentication';

export const PermissionGuard = ({ children, permission, redirect = '/' }) => {
  const { user } = useSelector((state) => state.auth);
  const { navigate } = useNavigation();

  // user is being fetched
  if (user === 0) {
    return null;
  }

  // Permission Guard
  if (user === null || !checkForPermission(user, permission)) {
    setImmediate(() => navigate(redirect));
  }

  return children;
};
