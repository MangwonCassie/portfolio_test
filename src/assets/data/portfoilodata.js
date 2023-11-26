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
			period: "2023.11 - 2023.11",
			project: "Toy",
			logo: "",
			percent: "100%",
			link: "",
			github: "https://github.com/MangwonCassie/MiniProject/tree/ecommerce",
			description: "반응형 쇼핑몰 프로젝트입니다.\n 깃허브 페이지를 통해 배포하였고, 약 3주동안 진행하였습니다.",
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
		
		// {
		// 	name: "Youtube Clone",
		// 	project: "Toy",
		// 	logo: "youtube",
		// 	period: "2020.12 - 2021.01",
		// 	percent: "100%",
		// 	github: "https://github.com/hjban-dev/Youtube_clone",
		// 	description: "구글의 동영상 사이트인 YOUTUBE 클론 프로젝트입니다.\n 동영상 업로드, 댓글, 좋아요 등의 기능을 개발하였습니다. 기간은 약 한달정도 소요되었고, 혼자 제작하였습니다.",
		// 	tech: ["Html & CSS", "Javascript", "React", "Redux", "Node.js", "MongoDB", "Mongoose"],
		// 	image: [
		// 		{
		// 			name: "youtube/youtube1.gif",
		// 			tit: "회원가입, 로그인",
		// 			desc: "회원가입 창에서 입력한 정보를 MongoDB에 저장하여 회원가입이 실행됩니다.\n DB의 정보들을 토대로 로그인이 실행됩니다.",
		// 		},
		// 		{
		// 			name: "youtube/youtube2.gif",
		// 			tit: "동영상 업로드 ",
		// 			desc: "업로드 페이지는 로그인이 되어 있는 사용자만 접근 가능하며, 컴퓨터에 있는 동영상을 업로드 할 수 있습니다. \n제목은 동영상의 제목으로 기본 생성되지만, 변경이 가능합니다.",
		// 		},
		// 		{
		// 			name: "youtube/youtube3.gif",
		// 			tit: "댓글",
		// 			desc:
		// 				"업로드가 된 동영상에 댓글을 입력할 수 있습니다. \n댓글 데이터는 입력자와 비디오 정보와 함께 DB에 저장되고, DB 정보를 토대로 관련 댓글 정보를 추출하여 댓글 영역에 띄워줍니다. 댓글 데이터는 입력자의 정보와 함께 내림차순으로 노출됩니다.",
		// 		},
		// 		{
		// 			name: "youtube/youtube4.gif",
		// 			tit: "좋아요",
		// 			desc:
		// 				"영상과 댓글에 모두 좋아요 기능이 가능합니다. \n좋아요를 누른 입력자와 비디오 정보 또는 댓글 정보가 함께 DB에 저장되고, 비디오와 댓글 정보를 토대로 관련 좋아요 정보의 갯수를 파악하여 보여줍니다. 사용자가 이전에 좋아요를 누른 경우 active 효과가 실행됩니다.",
		// 		},
		// 		{
		// 			name: "youtube/youtube5.gif",
		// 			tit: "구독",
		// 			desc: "내가 아닌 다른 사용자의 동영상에서 구독버튼이 노출됩니다. \n이미 구독을 누른 경우 구독 버튼은 비활성화 되어있습니다. 구독을 하면 구독 페이지에서 내가 구독한 사람의 영상을 볼 수 있습니다.",
		// 		},
		// 	],
		// },
		
		
		
	],
};

export default portfolioData;
