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
					desc: "메인 페이지에서 아이디를 입력 후 채팅방을 시작할 수 있는 창에 진입합니다. \n 창의 왼쪽 UI에는 채팅방 목록, 오른쪽에 채팅을 함께 할 수 있는 회원들을 검색할 수 있습니다.\n 채팅방엔진은 https://chatengine.io/를 사용했습니다. \n",
				},
				{
					name: "chatapp/chatapp2.gif",
					tit: "채팅엔진",
					desc: "챗엔진 (https://chatengine.io/) 에서 채팅방을 사용하는 사용자 관리, 그리고 채팅방의 내용을 모두 저장해서 관리할 수 있습니다. \n",
				},


			],
		},
		{
			name: "Cassie Ecommerce",
			period: "2023.11 - 2024.01",
			project: "Toy",
			logo: "",
			percent: "100%",
			link: "https://mangwoncassie.github.io/",
			github: "https://github.com/MangwonCassie/MiniProject/tree/3rd_ecommerce",
			description: "반응형 쇼핑몰 프로젝트입니다.\n 깃허브 페이지를 통해 배포하였고, 약 2개월 동안 진행하였습니다.",
			tech: ["Html & CSS", "Javascript", "React", "Node.js", "MongoDB", "Express"],
			image: [
				{
					name: "ecommerce/page1_main.JPG",
					tit: "메인페이지",
					desc: `공지사항 표시: Announcement 컴포넌트를 이용하여 홈페이지 상단에 공지사항을 표시했습니다. \n
					네비게이션 바: Navbar 컴포넌트를 통해 사용자에게 네비게이션 기능을 제공합니다.\n
					이미지 슬라이더: Slider 컴포넌트를 활용하여 다양한 이미지를 슬라이드 형태로 전시됩니다.\n
					카테고리 목록: Categories 컴포넌트를 이용하여 다양한 상품 카테고리를 표시합니다.\n
					상품 목록 표시: Products 컴포넌트를 이용하여 홈페이지에 다양한 상품을 목록으로 표시합니다.\n
					뉴스레터 구독: Newsletter 컴포넌트를 통해 사용자에게 뉴스레터를 구독할 수 있는 기능 제공합니다.\n
					푸터 영역:Footer 컴포넌트를 이용하여 홈페이지 하단에 푸터 정보를 표시합니다.\n`,
				},

				{
					name: "ecommerce/page1_register.JPG",
					tit: "회원가입페이지",
					desc: ` 배경 이미지 및 레이아웃: 전체 화면을 채우는 배경 이미지 및 중앙에 위치한 회원가입 폼을 구성. Styled-components를 사용하여 반응형 디자인 구현\n.
					입력 필드 및 양식 구성: 이름, 성, 아이디, 이메일, 비밀번호, 비밀번호 확인 등의 입력 필드를 포함하는 양식 구성. 입력 필드의 크기 및 여백 조절하여 깔끔한 레이아웃 제공하도록 노력했습니다.\n
					반응형 디자인: ​모바일 환경을 고려한 반응형 스타일 적용. (mobile 유틸리티 함수 사용)\n
					개인정보 동의 항목 표시: ​개인정보 처리에 동의하는 문구 및 개인정보 처리방침(PRIVACY POLICY)에 대한 링크 제공.\n
					동의 버튼 및 회원가입 버튼: "CREATE" 버튼 클릭 시, 회원가입 요청이 진행되도록 구현. 입력된 정보의 유효성을 검사합니다..​\n
					​`,
				},
				{
					name: "ecommerce/page1_login.JPG",
					tit: "로그인페이지",
					desc: `아이디: user1, 비밀번호: user1를 입력하여 기능을 확인하세요. \n
					사용자 입력 관리: 사용자가 입력한 아이디(username)와 비밀번호(password)를 상태값으로 관리. Input 컴포넌트를 활용하여 입력 필드 디자인 및 상태가 업데이트됩니다.\n
					로그인 버튼 및 상태에 따른 스타일링: "LOGIN" 버튼을 클릭할 때, handleClick 함수가 호출되어 로그인 시도. 사용자 입력이 유효하고, 로그인 요청이 진행 중이지 않을 때 버튼이 활성화됩니다.\n
					로그인 요청 중 또는 에러 발생 시 버튼 비활성화 및 스타일 변경.\n
					로그인 요청 및 에러 처리: login 함수를 이용하여 로그인 API 호출(dispatch 사용). 로그인 상태 및 에러 여부를 Redux에서 가져와 UI에 반영.\n
					에러 메시지 표시: 로그인 에러가 발생한 경우, 에러 메시지를 사용자에게 표시. 에러 메시지의 색상을 빨강으로 표현.\n
					비밀번호 찾기 및 계정 생성 링크: ​"DO NOT YOU REMEMBER THE PASSWORD?" 및 "CREATE A NEW ACCOUNT" 링크를 통해 비밀번호 찾기 및 새 계정 생성 기능으로 연결됩니다. (구현예정)\n
					이러한 기능들은 사용자의 로그인 환경을 효과적으로 관리하고, 에러 시 적절한 안내를 제공하며, 반응형 디자인으로 모바일 환경까지 고려한 로그인 페이지를 형성합니다.\n`,
				},
				{
					name: "ecommerce/page1_product.JPG",
					tit: "제품 상세 페이지",
					desc: `useLocation 훅을 사용하여 현재 경로의 정보를 가져와 경로에서 상품 ID 추출해 해당 ID에 대한 제품 정보를 서버에서 가져오는 getProduct 함수를 정의하고, useEffect를 사용하여 컴포넌트가 마운트될 때 실행되도록 처리합니다.\n
					상품 정보는 setProduct을 통해 상태에 저장되며, 해당 정보는 제목(title), 설명(desc), 가격(price), 이미지(img), 색상(color), 크기(size) 등을 포함합니다.\n
					클릭 이벤트를 통해 선택한 색상과 크기를 setColor 및 setSize를 통해 상태에 업데이트합니다.\n
					handleQuantity 함수를 사용하여 수량을 증가 혹은 감소시킬 수 있습니다. 상태값 quantity가 1보다 크면 감소하고, 그렇지 않으면 감소하지 않도록 제한합니다.\n
					"ADD TO CART" 버튼 클릭 시, handleClick 함수가 호출되어 상품 정보와 선택된 수량, 색상, 크기 등을 포함하여 Redux의 cartRedux에서 제공하는 addProduct 액션을 디스패치합니다.\n
					Redux를 사용하여 전역 상태인 장바구니에 상품을 추가할 수 있도록 합니다.\n`,
				},
				{
					name: "ecommerce/page1_productlist.JPG",
					tit: "상품리스트 페이지",
					desc: `카테고리 및 필터링: 현재 경로에서 추출한 카테고리를 제목으로 표시됩니다. (Title 컴포넌트), 제품 필터링을 위한 색상 및 크기 선택 기능을 구현했습니다. (Filter 컴포넌트) \n
					정렬 기능: ​제품 정렬을 위한 선택 옵션 (최신순, 가격 오름차순, 가격 내림차순)\n
					필터 및 정렬 이벤트 처리: 필터 및 정렬 변경에 대한 이벤트 핸들러 구현 (handleFilters 및 setSort), 선택된 필터 및 정렬 값을 상태로 관리 (filters 및 sort 상태)\n
					Responsiveness: 모바일 환경에 대한 반응형 스타일링 (mobile 유틸리티 함수 사용)\n
					하위 컴포넌트 연결: 상위 컴포넌트에서 Navbar, Announcement, Products, Newsletter, Footer 등 하위 컴포넌트들을 조합하여 페이지를 완성\n
					라우터 활용: eact-router-dom의 useLocation 훅을 사용하여 현재 경로 정보를 추출합니다.\n
					상품 목록 표시: ​Products 컴포넌트에 현재 카테고리, 선택된 필터, 정렬 기준 등을 전달하여 상품 목록을 표시합니다.\n`,
				},
				{
					name: "ecommerce/page1_cart.JPG",
					tit: "장바구니페이지",
					desc: `상단 탐색 및 버튼: ​"CONTINUE SHOPPING" 버튼 클릭 시, 사용자를 이전 페이지로 이동하도록 구현했습니다.\n
					장바구니 및 위시리스트 항목 표시 및 관련 정보 제공. "CHECKOUT NOW" 버튼으로 주문 및 결제 프로세스 진행합니다.\n
					상품 정보 및 가격 표시: 장바구니에 담긴 각 상품에 대한 정보 표시 (이미지, 상품명, ID, 색상, 크기 등). 수량 증가 및 감소를 위한 플러스/마이너스 버튼 제공. 상품 가격과 수량을 곱한 총 가격을 표시합니다.\n
					주문 요약 정보: ​주문 총액, 예상 배송료, 할인 금액, 최종 결제 금액 등 주문 요약 정보 표시됩니다.\n
					주문 프로세스 이동: ​"CHECKOUT NOW" 버튼 클릭 시, 결제 및 주문 완료 페이지로 이동가능하게 구현했습니다.`,
				},
				{
					name: "ecommerce/admin1.png",
					tit: "Admin Page/Main page",
					desc: `차트 및 통계를 활용하여 사용자에게 주요 정보 제공하도록 UI를 구현했습니다.\n
					FeaturedInfo 컴포넌트를 사용하여 대시보드 상단에 기본 정보 표시.\n
					사용자 통계 차트: react-chart library를 이용해 사용자 통계를 시각화한 차트 제공. 사용자가 웹 애플리케이션을 사용한 월별 활동량을 표시합니다.\n
					월별 활동 통계: ​userRequest를 통해 서버에서 월별 사용자 활동 통계 데이터를 가져옴.\n
					각 월별 활동량을 차트 데이터로 가공하여 Chart 컴포넌트에 전달됩니다.\n
					웹 애플리케이션의 활동 분석: ​웹 애플리케이션의 사용자 활동을 월별로 분석하여 차트에 표시합니다.\n
					사용자의 활동량에 따라 "Active User" 수치를 시각적으로 표현합니다.\n
					WidgetSm 및 WidgetLg 컴포넌트를 통해 추가적인 정보를 제공. 작은 위젯과 큰 위젯을 통해 다양한 정보를 효과적으로 전달되도록 구현했습니다.\n`,
				},
				{
					name: "ecommerce/admin1_product.png",
					tit: "Admin Page/product management list page",
					desc: `어드민 제품 목록 페이지: 제품 목록 표시: Material-UI의 DataGrid 컴포넌트를 사용하여 제품 목록을 테이블 형태로 표시합니다.\n
					제품 ID, 제품 이미지, 제품명, 재고량, 가격 등의 정보를 표시합니다.\n
					제품 삭제 및 수정: "DeleteOutline" 아이콘을 클릭하여 특정 제품을 삭제할 수 있음.\n
					"Edit" 버튼을 클릭하여 특정 제품의 상세 페이지로 이동하여 수정할 수 있음.\n
					서버 데이터 가져오기: Redux의 useDispatch를 통해 API 호출을 처리하고, useSelector를 사용하여 상태를 가져옴.\n
					getProducts 함수를 사용하여 서버에서 제품 목록 데이터를 비동기적으로 가져옴.\n
					페이지 이동: Link 컴포넌트를 사용하여 특정 제품의 상세 페이지로 이동하는 링크 제공.\n
					반응형 디자인: ​다양한 화면 크기와 디바이스에 대응하기 위해 반응형 디자인 적용했습니다.\n`,
				},
				{
					name: "ecommerce/admin1_product_detail.png",
					tit: "Admin Page/product management detail page",
					desc: `페이지 초기화: ​useLocation 훅을 사용하여 현재 URL에서 제품 ID를 추출.\n
					Redux의 useSelector를 이용해 해당 제품 정보를 가져옴.\n
					페이지 상단: ​"Product"이라는 제목을 포함한 페이지 헤더 표시.\n
					"Create" 버튼을 클릭하면 새 제품을 생성하는 페이지로 이동하는 링크 제공.\n
					제품 통계 및 정보 표시: Chart 컴포넌트를 사용하여 제품의 판매 성과를 시각화하여 표시.\n
					제품 이미지, 제품명, ID, 판매량, 재고 여부 등의 정보를 표시.\n
					​제품 업데이트 폼: 입력 폼을 통해 제품의 이름, 설명, 가격, 재고 여부 등을 업데이트할 수 있는 기능을 구현했습니다.\n
					이미지를 업로드하여 제품 이미지를 변경할 수 있는 기능 포함.\n
					업데이트 수행: 사용자가 입력한 정보를 바탕으로 제품 업데이트 수행. updateProducts API 호출을 통해 업데이트된 정보를 서버에 반영합니다.\n`,
				},
				{
					name: "ecommerce/admin1_user.png",
					tit: "Admin Page",
					desc: `사용자 목록 표시: Material-UI의 DataGrid 컴포넌트를 사용하여 사용자 목록을 테이블 형태로 표시.\n
					사용자 ID, 사용자 이미지, 사용자명, 이메일, 상태, 거래량 등의 정보를 표시.\n
					사용자 삭제 및 수정: "DeleteOutline" 아이콘을 클릭하여 특정 사용자를 삭제할 수 있음.\n
					"Edit" 버튼을 클릭하여 특정 사용자의 상세 페이지로 이동하여 수정할 수 있음.\n
					페이지 이동: Link 컴포넌트를 사용하여 특정 사용자의 상세 페이지로 이동하는 링크 제공.\n
					사용자 정보 표시: 각 행에는 사용자의 프로필 이미지와 사용자명이 포함된 사용자 정보 표시.\n
					반응형 디자인: 다양한 화면 크기와 디바이스에 대응하기 위해 반응형 디자인 적용했습니다..\n
					이 페이지는 사용자 목록을 시각적으로 표시하고, 각 사용자에 대해 수정 및 삭제 기능을 제공합니다. 테이블 형태로 데이터를 표시하며, 반응형 디자인으로 여러 화면 크기에서 효과적으로 사용할 수 있습니다.\n`,
				},
				{
					name: "ecommerce/page2_api.gif",
					tit: "POSTMAN API",
					desc: "POSTMAN 툴을 이용해서 API를 만들었습니다.\n",
				},
				{
					name: "ecommerce/page2_stripe.gif",
					tit: "결제툴 STRIPE",
					desc: "Stripe 툴을 이용해서 결제기능을 만들었습니다.\n",
				},
				{
					name: "ecommerce/page2_mongodb1.JPG",
					tit: "MongoDB 데이터",
					desc: "MongoDb로 daba를 관리했습니다.\n",
				},
				{
					name: "ecommerce/heroku1.JPG",
					tit: "백엔드 서버 배포",
					desc: "heroku 백엔드 배포를 통해 FE/BE 파트를 이분화 시키고 동적 서버 사이드 코드를 실행할 수 있게하였습니다.\n",
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
					desc: "글자를 쓰고 엔터를 치면 맞는 단어를 입력했을 경우 색깔이 바뀝니다.\n",
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
					desc: "react-swiper, react-share, styled-components라이브러리를 통해 메인 페이지 구현했습니다.\n",
				},
				{
					name: "nikeclone/productlist1.JPG",
					tit: "상품목록페이지",
					desc: " styled-components, useState, useEffect를 이용한 데이터 정렬기능이 있는 상품 목록페이지를 구현했습니다.\n",
				},
				{
					name: "nikeclone/productdetail1.JPG",
					tit: "상품상세페이지",
					desc: " styled-components, useState, useEffect를 이용해서 반응형을 구현하고, 컴포넌트를 모듈화했습니다.\n",
				},
				{
					name: "nikeclone/event1.JPG",
					tit: "이벤트페이지",
					desc: " js파일과 css파일을 분리해서 이벤트페이지를 구현했습니다.\n",
				},
				{
					name: "nikeclone/notion1.JPG",
					tit: "노션페이지",
					desc: " 요구사항 및 기능 구현 내용 정리, 트러블 슈팅, 회고록, 기타 공유 건 정리하는 툴\n",
				},
				{
					name: "nikeclone/figma1.JPG",
					tit: "피그마페이지",
					desc: "UI디자인툴 Figma를 이용 백엔드/프론트엔드팀원들과 홈페이지 UI디자인에 대한 소통을 진행했습니다.\n",
				},
				{
					name: "nikeclone/ppt1.jpg",
					tit: "발표자료",
					desc: " 개발 동기 및 각 기능 별 정리한 ppt 페이지 자료 (직접 제작했습니다.)\n",
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
					desc: "state 및 effect를 사용하여 화면에 특정 알림을 띄우고 일정 시간이 지난 후 해당 알림을 자동으로 숨기는 기능 구현했습니다. swiper를 사용하여 banner를 기능을 구현했습니다.\n",
				},
				{
					name: "tomorrowhouse/best1.png",
					tit: "베스트상품목록페이지",
					desc: "공동모듈화에 초점을 맞춰서 컴포넌트를 재사용할 수 있게 구현했습니다. React Router 라이브러리의 useNavigate 훅을 가져와서 사용자가 애플리케이션에서 다른 경로로 이동할때 필요한 기능을 구현했습니다. Axios 사용하여 rest api 를 통한 데이터 처리, intersection-observer api를 이용한 infinite scroll 구현했습니다.\n",
				},
				{
					name: "tomorrowhouse/login1.png",
					tit: "로그인페이지",
					desc: "인풋 입력값(아이디, 패스워드 등) 유효성 검사와 그에 따른 메시지에 중점을 두었습니다. \n",
				},
				{
					name: "tomorrowhouse/list1.png",
					tit: "상품목록페이지",
					desc: "상위로 이동할 수 있는 Scroll, 카테고리에 따른 필터리 구현, useInifiniteQuery를 활용한 무한스크롤기능을 구현했습니다.\n",
				},
				{
					name: "tomorrowhouse/detail1.png",
					tit: "상품상세페이지",
					desc: "상위로 이동할 수 있는 ScrollButton, 옵션 및 수량에 따른 주문금액계산을 할 수 있게 기능을 구현했습니다.\n",
				},
				{
					name: "tomorrowhouse/loading1.png",
					tit: "상품상세페이지(로딩)",
					desc: "Skeleton UI를 통한 로딩처리 기능을 구현했습니다. \n",
				},
				{
					name: "tomorrowhouse/cart1.png",
					tit: "장바구니페이지",
					desc: "Redux Toolkit를 사용하여 redux 스토어를 설정하고 두개의 리듀서를 정의했고, 배열형태의 상품정보 데이터를 정의해서 정적데이터를 불러왔습니다.\n",
				},
				{
					name: "tomorrowhouse/payment.png",
					tit: "결제완료페이지",
					desc: " 사진변경요망, React Router 라이브러리의 useNavigate 훅을 이용해 상품상세페이지에 연결되도록 구현했습니다.\n",
				},
				{
					name: "tomorrowhouse/notion1.png",
					tit: "노션페이지",
					desc: " 요구사항 및 기능 구현 내용 정리, 트러블 슈팅, 회고록, 기타 공유 건 정리하는 툴입니다.\n",
				},
				{
					name: "tomorrowhouse/ppt1.jpg",
					tit: "발표자료",
					desc: " 개발 동기 및 각 기능 별 정리한 ppt 페이지 자료 (직접 제작했습니다.)\n",
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
					desc: "개발중\n",
				},
			]
		},





	],
};

export default portfolioData;



