import { FaDiscord } from 'react-icons/fa';

import { BACKEND_URL } from 'config';
import { useNavigation } from 'hooks/useNavigation';
import classes from 'pages/authentication/DiscordButton.module.css';

export const DiscordButton = () => {
  const { navigate } = useNavigation();
  return (
    <button
      className={classes.DiscordButton}
      onClick={() => navigate(`${BACKEND_URL}/auth/discord`)}
    >
      {<FaDiscord size={32} />} Login with discord
    </button>
  );
};
