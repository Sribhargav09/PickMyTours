import dynamic from "next/dynamic";
import CallToActions from "../../components/common/CallToActions";
import Seo from "../../components/common/Seo";
import DefaultHeader from "../../components/header/default-header";
import DefaultFooter from "../../components/footer/default";
import LoginWithSocial from "../../components/common/LoginWithSocial";
import LoginForm from "../../components/common/LoginForm";


import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const LogOut = () => {

  const [loader, setLoader] = useState(false);
  const [userToken, setUserToken] = useState(sessionStorage.getItem("token"));

  
  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    if(!userToken){
      Router.push("/others-pages/login");
    }else{
      Router.push("/");
    }
    }, 1200);
  }, []);

  return (
    <>
    
    <Dialog
        open={loader}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
        <DialogTitle id="alert-dialog-title">
          
        </DialogTitle>
        <DialogContent style={{ width: '100%', textAlign:'center' }}>
        <Hourglass
        visible={true}
        height="80"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
      />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default dynamic(() => Promise.resolve(LogIn), { ssr: false });
