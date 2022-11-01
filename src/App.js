import Feed from "./component/Feed";
import Rightbar from "./component/Rightbar";
import Sidebar from "./component/Sidebar";
import { Box , Stack, ThemeProvider, createTheme } from '@mui/material'
import Navbar from "./component/Navbar";
import Add from "./component/Add";
import React, {useState} from 'react'

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        {/* navbar */}
        <Navbar />
        <Stack direction='row' spacing={2} justify-content='space-between'>
     <Sidebar setMode={setMode} mode={mode}/>
     <Feed />
     <Rightbar />
     </Stack>
     <Add />
     </Box>
    </ThemeProvider>
  );
}

export default App;
