import { FaDiscord } from 'react-icons/fa';

import { useNavigation } from '../../hooks/useNavigation';
import classes from './DiscordButton.module.css';

export const DiscordButton = () => {
  const { navigate } = useNavigation();
  return (
    <button
      className={classes.DiscordButton}
      onClick={() => navigate('http://localhost:3000/auth/discord')}
    >
      {<FaDiscord size={32} />} Login with discord
    </button>
  );
};
