
import FacebookLogin from 'react-facebook-login';

function App() {

  const responseFacebook = (response) => {
    console.log(response);
  }

  const componentClicked = () => {
    console.log('component clicked');
  }

  return (
    <div className="App">
      <FacebookLogin
      appId="240379330783555"
      autoLoad={false}
      fields="name,email,picture"
      onClick={componentClicked}
      callback={responseFacebook} />
    </div>
  );
}

export default App;
