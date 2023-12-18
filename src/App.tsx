import {Route, Routes} from "react-router";
import Home from "./pages/Home.tsx";
import {AppBar, Toolbar, Typography} from "@mui/material";

function App() {

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">My Portfolio</Typography>
                </Toolbar>
            </AppBar>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </>
    )
}

export default App