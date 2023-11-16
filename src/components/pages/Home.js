import React, { Component, useState } from "react";
import Header from "../organisms/Header";
import Preloader from "../molecules/Preloader";
import HomeTxtWrap from "../organisms/HomeTxtWrap";
import HomeTxtWrapEng from "../organisms/HomeTxtWrapEng";
import styled from "styled-components";

export class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			language: "kor",
		};
	}

	setLanguage = (language) => {
		this.setState({ language });
	  };


	render() {
		return (
			<StyledDiv>
				<Header page="home" setLanguage={this.setLanguage} />
				{this.state.language === "kor" ? <HomeTxtWrap /> : <HomeTxtWrapEng />}
				<HomeTxtWrap />
				<Preloader />
			</StyledDiv>
		);
	}
}

export default Home;

const StyledDiv = styled.div`
	overflow: hidden;
	@media ${(props) => props.theme.mobile} {
		overflow: auto;
	}
`;
