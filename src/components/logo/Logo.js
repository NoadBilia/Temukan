import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// @mui
import { Box, Link } from '@mui/material';
// ----------------------------------------------------------------------

const Logo = forwardRef(({ disabledLink = false, sx, ...other }, ref) => {

  const logo = (
    <Box
      ref={ref}
      component="div"
      sx={{
        width: 200,
        height: 200,
        display: 'inline-flex',
        ...sx,
      }}
      {...other}
    >
      <img src={`https://scontent.fhfa1-1.fna.fbcdn.net/v/t39.30808-6/281790010_10160132592890148_5596433991237149948_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ATeZnm3AHhIAX8qZ-Ge&_nc_ht=scontent.fhfa1-1.fna&oh=00_AfBWby9BqP-cVLLbkNHr5G_fxcp9napUUWrQSMHx5zDKCg&oe=63F1DBFD`} alt="loge" />
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

Logo.propTypes = {
  sx: PropTypes.object,
  disabledLink: PropTypes.bool,
};

export default Logo;