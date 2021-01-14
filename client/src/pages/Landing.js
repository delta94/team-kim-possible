import React from "react";
import SignUp from "../components/SignUp";
import SignUpPage2 from "../components/SignUpPage2";
import SignIn from "../components/SignIn";

import { ThemeProvider } from "@material-ui/core/styles";

import { theme } from "../themes/theme";

const Landing = () => {
	return (
		<ThemeProvider theme={theme}>
			<SignUpPage2></SignUpPage2>
		</ThemeProvider>
	);
};

export default Landing;
