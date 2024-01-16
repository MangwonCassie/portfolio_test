const portfolioData = {
	portfolioList: [
		{
			name: "Cassie Chat",
			period: "2023.10 - 2023.10",
			project: "Toy",
			logo: "",
			percent: "100%",
			link: "",
			github: "https://github.com/MangwonCassie/MiniProject/tree/chatapp",
			description: "채팅 앱 프로젝트입니다.\n다른 사람과 채팅으로 소통 할 수 있는 웹 앱입니다. Firebase를 통해 배포하였고, 약 1주동안 진행하였습니다.",
			tech: ["Html & CSS", "Javascript", "React", "Node.js", "Axios", "Cors", "Express"],
			image: [
				{
					name: "chatapp/chatapp.gif",
					tit: "메인페이지",
					desc: "메인 페이지에서 아이디를 입력 후 채팅방을 시작할 수 있는 창에 진입합니다. \n 창의 왼쪽 UI에는 채팅방 목록, 오른쪽에 채팅을 함께 할 수 있는 회원들을 검색할 수 있습니다.\n 채팅방엔진은 https://chatengine.io/를 사용했습니다. \n" ,
				},
				{
					name: "chatapp/chatapp2.gif",
					tit: "채팅엔진",
					desc: "챗엔진 (https://chatengine.io/) 에서 채팅방을 사용하는 사용자 관리, 그리고 채팅방의 내용을 모두 저장해서 관리할 수 있습니다. \n" ,
				},
				
				
			],
		},
		{
			name: "Cassie Ecommerce",
			period: "2023.11 - 2024.01",
			project: "Toy",
			logo: "",
			percent: "100%",
			link: "",
			github: "https://github.com/MangwonCassie/MiniProject/tree/3rd_ecommerce",
			description: "반응형 쇼핑몰 프로젝트입니다.\n 깃허브 페이지를 통해 배포하였고, 약 2개월 동안 진행하였습니다.",
			tech: ["Html & CSS", "Javascript", "React", "Node.js", "MongoDB", "Express"],
			image: [
				{
					name: "ecommerce/page1_main.JPG",
					tit: "메인페이지",
					desc: "슬라이드 \n 상품리스트.\n News Letter, Footer로 구성되어있습니다. \n" ,
				},
				{
					name: "ecommerce/page1_register.JPG",
					tit: "회원가입페이지",
					desc: "회원가입 페이지 입니다.\n" ,
				},
				{
					name: "ecommerce/page1_login.JPG",
					tit: "로그인페이지",
					desc: "로그인 페이지 입니다.\n" ,
				},
				{
					name: "ecommerce/page1_product.JPG",
					tit: "제품 상세 페이지",
					desc: "제품 상세페이지입니다.\n" ,
				},
				{
					name: "ecommerce/page1_productlist.JPG",
					tit: "상품리스트 페이지",
					desc: "상품 리스트 페이지 입니다.\n" ,
				},
				{
					name: "ecommerce/page1_cart.JPG",
					tit: "장바구니페이지",
					desc: "장바구니 페이지 입니다.\n" ,
				},
				{
					name: "ecommerce/page2_api.gif",
					tit: "POSTMAN API",
					desc: "POSTMAN 툴을 이용해서 API를 만들었습니다.\n" ,
				},
				{
					name: "ecommerce/page2_stripe.gif",
					tit: "결제툴 STRIPE",
					desc: "Stripe 툴을 이용해서 결제기능을 만들었습니다.\n" ,
				},
				{
					name: "ecommerce/page2_mongodb1.JPG",
					tit: "MongoDB 데이터",
					desc: "MongoDb로 daba를 관리했습니다.\n" ,
				},
				{
					name: "ecommerce/heroku1.JPG",
					tit: "백엔드 서버 배포",
					desc: "heroku 백엔드 배포를 통해 FE/BE 파트를 이분화 시키고 동적 서버 사이드 코드를 실행할 수 있게하였습니다.\n" ,
				},
				
				
				
			],
		},
		{
			name: "Wordle Mini Project",
			period: "2023.06 - 2023.06",
			project: "Toy",
			logo: "",
			percent: "100%",
			link: "",
			github: "https://github.com/MangwonCassie/MiniProject/tree/wordle",
			description: "단어를 맞추는 게임 프로젝트입니다.\n 약 1주동안 진행하였습니다.",
			tech: ["Html & CSS", "Javascript"],
			image: [
				{
					name: "wordle/main1.JPG",
					tit: "메인페이지",
					desc: "글자를 쓰고 엔터를 치면 맞는 단어를 입력했을 경우 색깔이 바뀝니다.\n" ,
				},
			],
		},
		{
			name: "Nike E-Commerce Website Clone Project",
			period: "2023.11 - 2023.12",
			project: "Toy",
			logo: "",
			percent: "30%",
			link: "https://cassie1107.github.io/",
			github: "https://github.com/SC-Front-End/Nike-Clone",
			description: "Nike Korea E-commerce Website Clone Project.\n 약 총 5명의 팀원으로 2주 동안 진행하였습니다. 상품상세페이지와 배포를 담당했고 회의를 통한 코드 리팩토링 진행했습니다. ",
			tech: ["Html & CSS", "Javascript", "React"],
			image: [
				{
					name: "nikeclone/main1.JPG",
					tit: "메인페이지",
					desc: "react-swiper, react-share, styled-components라이브러리를 통해 메인 페이지 구현했습니다.\n" ,
				},
				{
					name: "nikeclone/productlist1.JPG",
					tit: "상품목록페이지",
					desc: " styled-components, useState, useEffect를 이용한 데이터 정렬기능이 있는 상품 목록페이지를 구현했습니다.\n" ,
				},
				{
					name: "nikeclone/productdetail1.JPG",
					tit: "상품상세페이지",
					desc: " styled-components, useState, useEffect를 이용해서 반응형을 구현하고, 컴포넌트를 모듈화했습니다.\n" ,
				},
				{
					name: "nikeclone/event1.JPG",
					tit: "이벤트페이지",
					desc: " js파일과 css파일을 분리해서 이벤트페이지를 구현했습니다.\n" ,
				},
				{
					name: "nikeclone/notion1.JPG",
					tit: "노션페이지",
					desc: " 요구사항 및 기능 구현 내용 정리, 트러블 슈팅, 회고록, 기타 공유 건 정리하는 툴\n" ,
				},
				{
					name: "nikeclone/figma1.JPG",
					tit: "피그마페이지",
					desc: "UI디자인툴 Figma를 이용 백엔드/프론트엔드팀원들과 홈페이지 UI디자인에 대한 소통을 진행했습니다.\n" ,
				},
				{
					name: "nikeclone/ppt1.jpg",
					tit: "발표자료",
					desc: " 개발 동기 및 각 기능 별 정리한 ppt 페이지 자료 (직접 제작했습니다.)\n" ,
				},
			],
		},
		{
			name: "Tomorrow House E-commerce Website Clone Project",
			period: "2023.12 - 2023.12",
			project: "Toy",
			logo: "",
			percent: "30%",
			link: "",
			github: "https://github.com/SC-Front-End/Tomorrow-House",
			description: "Tomorrow House E-commerce Website Clone Project.\n 약 총 8명의 팀원으로 3주 동안 진행하였습니다. 베스프상품목록페이지, 결제완료페이지를 담당했고 프록시 설정 및 rest api 연결 부분을 맡았습니다.",
			tech: ["Html & CSS", "Javascript", "React", "Java", "MariaDB", "Spring Boot", "Amazon ec2"],
			image: [
				{
					
					name: "tomorrowhouse/main1.png",
					tit: "메인페이지",
					desc: "state 및 effect를 사용하여 화면에 특정 알림을 띄우고 일정 시간이 지난 후 해당 알림을 자동으로 숨기는 기능 구현했습니다. swiper를 사용하여 banner를 기능을 구현했습니다.\n" ,
				},
				{
					name: "tomorrowhouse/best1.png",
					tit: "베스트상품목록페이지",
					desc: "공동모듈화에 초점을 맞춰서 컴포넌트를 재사용할 수 있게 구현했습니다. React Router 라이브러리의 useNavigate 훅을 가져와서 사용자가 애플리케이션에서 다른 경로로 이동할때 필요한 기능을 구현했습니다. Axios 사용하여 rest api 를 통한 데이터 처리, intersection-observer api를 이용한 infinite scroll 구현했습니다.\n" ,
				},
				{
					name: "tomorrowhouse/login1.png",
					tit: "로그인페이지",
					desc: "인풋 입력값(아이디, 패스워드 등) 유효성 검사와 그에 따른 메시지에 중점을 두었습니다. \n" ,
				},
				{
					name: "tomorrowhouse/list1.png",
					tit: "상품목록페이지",
					desc: "상위로 이동할 수 있는 Scroll, 카테고리에 따른 필터리 구현, useInifiniteQuery를 활용한 무한스크롤기능을 구현했습니다.\n" ,
				},
				{
					name: "tomorrowhouse/detail1.png",
					tit: "상품상세페이지",
					desc: "상위로 이동할 수 있는 ScrollButton, 옵션 및 수량에 따른 주문금액계산을 할 수 있게 기능을 구현했습니다.\n" ,
				},
				{
					name: "tomorrowhouse/loading1.png",
					tit: "상품상세페이지(로딩)",
					desc: "Skeleton UI를 통한 로딩처리 기능을 구현했습니다. \n" ,
				},
				{
					name: "tomorrowhouse/cart1.png",
					tit: "장바구니페이지",
					desc: "Redux Toolkit를 사용하여 redux 스토어를 설정하고 두개의 리듀서를 정의했고, 배열형태의 상품정보 데이터를 정의해서 정적데이터를 불러왔습니다.\n" ,
				},
				{
					name: "tomorrowhouse/payment.png",
					tit: "결제완료페이지",
					desc: " 사진변경요망, React Router 라이브러리의 useNavigate 훅을 이용해 상품상세페이지에 연결되도록 구현했습니다.\n" ,
				},
				{
					name: "tomorrowhouse/notion1.png",
					tit: "노션페이지",
					desc: " 요구사항 및 기능 구현 내용 정리, 트러블 슈팅, 회고록, 기타 공유 건 정리하는 툴입니다.\n" ,
				},
				{
					name: "tomorrowhouse/ppt1.jpg",
					tit: "발표자료",
					desc: " 개발 동기 및 각 기능 별 정리한 ppt 페이지 자료 (직접 제작했습니다.)\n" ,
				},
			],
		},
		{
			name: "Hotel Booking Website Project",
			period: "2024.-01 - ing",
			project: "Toy",
			logo: "",
			percent: "100%",
			link: "",
			github: "",
			description: "Java Spring Boot back-end base 호텔 부킹 웹사이트",
			tech: ["Html & CSS", "Javascript", "React", "JAVA", "Spring Boot", "MySQL"],
			image: [
				{
					name: "",
					tit: "메인페이지",
					desc: "개발중\n" ,
				},
			]
		},
		
		
		
		
		
	],
};

export default portfolioData;



