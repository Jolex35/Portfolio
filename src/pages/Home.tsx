import {Container, Paper, Typography} from "@mui/material";

function Home() {
    return(
    <div className="App">
        <Container component="main">
            <Paper elevation={3} className="App-content">
                <img
                    src="your_photo_url.jpg"  // Replace with the URL of your photo
                    className="App-logo"
                    alt="Your Name"
                />
                <Typography variant="h4">Jolas Alex</Typography>
                <Typography variant="body1">Welcome to my portfolio!</Typography>
            </Paper>
        </Container>
    </div>
    )
}

export default Home;












