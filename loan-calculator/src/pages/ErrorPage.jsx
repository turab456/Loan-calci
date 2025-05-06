import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <Typography variant="h4" sx={{textAlign:'center'}}>
          Something went wrong in the application.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Link to={"/"}>
            <Button variant="outlined">Go Home</Button>
          </Link>
        </Box>
      </div>
    </Box>
  );
};

export default ErrorPage;
