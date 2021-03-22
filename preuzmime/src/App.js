import './App.css';
import  Frame from './components/frame';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {main: "#F2C94C", dark: "#E09F2F"},
    secondary: {main: "#EB4949"}
  },
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Frame>
        </Frame> 
      </ThemeProvider>
    </div>
  );
}

export default App;
