import {
  Container,
  CssBaseline,
  Paper,
  ThemeProvider
} from "@material-ui/core";
import HomeScreen from "./screens/HomeScreen";
import { theme } from "./styles";

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper>
          <HomeScreen></HomeScreen>
        </Paper>
      </Container>
    </ThemeProvider>
  );

}

export default App;
