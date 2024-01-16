import React, { Component, useState } from "react";
import { withTranslation} from "react-i18next"; // i18n 추가
import Header from "../organisms/Header";
import Preloader from "../molecules/Preloader";
import HomeTxtWrap from "../organisms/HomeTxtWrap";
import styled from "styled-components";

export class Home extends Component {
	render() {
		const { t, i18n } = this.props;

		// 언어 변경 함수
		const handleLanguageChange = () => {
			const newLanguage = i18n.language === "ko" ? "en" : "ko";
			i18n.changeLanguage(newLanguage);
		};


		return (
			<StyledDiv>
				<Header page="home" handleLanguageChange={handleLanguageChange} />
				<HomeTxtWrap />
				<Preloader />
			</StyledDiv>
		);
	}
}



export default withTranslation()(Home);

const StyledDiv = styled.div`
	overflow: hidden;
	@media ${(props) => props.theme.mobile} {
		overflow: auto;
	}
`;



