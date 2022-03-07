import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: '#131921',
    '& a': {
      color: '#fff',
      marginLeft: 10,
      textDecoration: 'none',
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
    color: '#fff',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
  section: {
    marginTop: 10,
    marginBottom: 10,
  },
});
export default useStyles;
