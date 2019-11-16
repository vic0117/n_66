import React, { Component } from "react";
import { Container } from "react-bootstrap";
import './TripDes2.scss'
import { ReactComponent as Dollar } from './images/dollar-sign-solid.svg'
import { ReactComponent as Search } from './images/search.svg'
import { ReactComponent as Play } from './images/hiking-solid.svg'
import location from './images/location.svg'
import home from './images/home-solid.svg'

class TripDes2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
		btn: "預算",  //控制大button active
		btn2:'',
		Btn3:false, //控制li長出來
    };
  }

  render() {
	  const {detailData}=this.props;
    return (
		 <>
		 {detailData.map(item=>(
			<Container key={item.sid}>
        <div className='TripDes2Box'>
          <div className='TripDes2BtnBox'>
            <div
              className={this.state.btn === "預算" ? "TripDes2Btn Btn1 active" : "TripDes2Btn Btn1"}
              onClick={() => {
                this.setState({ btn: "預算",Btn3:false });
              }}
            >
					<div className='TripDes2Inside'>
						<Dollar className='TripDes2InsideIcon'/>
						<p>預算</p></div>
					</div>
            <div
				className={this.state.btn === "每日行程" ? "TripDes2Btn Btn2 active " : "TripDes2Btn Btn2"}
              onClick={() => {
                this.setState({ btn: "每日行程",Btn3:false });
              }}
            >	
					<div className='TripDes2Inside'>
						<Play className='TripDes2InsideIcon' style={{width:'160px !important'}}/>
						<p>每日行程</p>
				  	</div> 
            </div>
            <div
				className={this.state.btn === "了解更多" ? "TripDes2Btn Btn3 active" : "TripDes2Btn Btn3"}
              onClick={() => {
                this.setState({ btn: "了解更多",Btn3:!this.state.Btn3,btn2:'旅行細節'});
              }}
            >
					<div className='TripDes2Inside' style={{borderBottom:'none'}}>
						<Search className='TripDes2InsideIcon'/>
						<p>了解更多</p>
					</div>
            </div>
				<ul className='searchList' style={{height:this.state.Btn3? '135px' :'0px',display:'block'}}>
					<li onClick={() => {this.setState({ btn2:"旅行細節"})}}
						className={this.state.btn2==='旅行細節'? 'active1': null}>
						旅行細節
					</li>
					<li onClick={() => {this.setState({ btn2: "設備"})}}
						className={this.state.btn2==='設備'? 'active1': null}>
						設備
					</li>
					<li onClick={() => {this.setState({ btn2: "手續與健康"})}}
						className={this.state.btn2==='手續與健康'? 'active1': null}>
						手續與健康
					</li>
				</ul>
          </div>
          <div className='TripImportantDesBox'>
            {this.state.btn === "預算" ? 
					<div>
				  		<h4>{this.state.btn}:</h4>
				  		<div className='budgetBox'>
				  			<p>{item.trip_des2_budget1}</p>
				  			<p>{item.trip_des2_budget2}</p>
						</div>
						<div>
							<h6><u>價格包含:</u></h6>
							<ul>
								<li>{JSON.parse(item.trip_des2_content1_1)[0]}</li>
								<li>{JSON.parse(item.trip_des2_content1_1)[1]}</li>
								<li>{JSON.parse(item.trip_des2_content1_1)[2]}</li>
								<li>{JSON.parse(item.trip_des2_content1_1)[3]}</li>
								<li>{JSON.parse(item.trip_des2_content1_1)[4]}</li>
								<li>{JSON.parse(item.trip_des2_content1_1)[5]}</li>
							</ul>
						</div>
						<div>
							<h6><u>價格不包含:</u></h6>
							<ul>
								<li>{JSON.parse(item.trip_des2_content1_2)[0]}</li>
								<li>{JSON.parse(item.trip_des2_content1_2)[1]}</li>
								<li>{JSON.parse(item.trip_des2_content1_2)[2]}</li>
								<li>{JSON.parse(item.trip_des2_content1_2)[3]}</li>
							</ul>
						</div>
						<div>
							<h6><u>當場付款:</u></h6>
							<ul>
								<li>{JSON.parse(item.trip_des2_content1_3)[0]}</li>
								<li>{JSON.parse(item.trip_des2_content1_3)[1]}</li>
								<li>{JSON.parse(item.trip_des2_content1_3)[2]}</li>
								<li>{JSON.parse(item.trip_des2_content1_3)[3]}</li>
							</ul>
						</div>
					</div> 
				: null}

            {this.state.btn === "每日行程" ? 
					<div>
						<div className='oneDay'>
							<div className='AllDayTitle'>
								<h4>{this.state.btn}:</h4>
								<span>旅行量身定做！</span>
								<p>我們提出了我們設計的路線。這是指示性的和靈活的。如果沒有參與，請聯繫我們的專業顧問之一。他將很樂意與您一起為您選擇的行程提供個性化和詳細的評估。</p>
							</div>
							<div className='everyday'>
								<span>第一天</span>
								<div className='everydayTitle'><img src={location} alt='location'/><p>{item.trip_des2_content2_1}</p></div>
								<p>{item.trip_des2_content2_2}</p>
							</div>
							<div className='everydayLive'><img src={home} alt='home'/><p>住宿：</p><span>飯店</span></div>
							<div className='everyday'>
								<span>第二天</span>
								<div className='everydayTitle'><img src={location} alt='location'/><p>{item.trip_des2_content2_3}</p></div>
								<p>{item.trip_des2_content2_4}</p>
							</div>
							<div className='everydayLive'><img src={home} alt='home'/><p>住宿：</p><span>飯店</span></div>
							<div className='everyday'>
								<span>第三天</span>
								<div className='everydayTitle'><img src={location} alt='location'/><p>{item.trip_des2_content2_5}</p></div>
								<p>{item.trip_des2_content2_6}</p>
							</div>
							<div className='everydayLive'><img src={home} alt='home'/><p>住宿：</p><span>飯店</span></div>
							<div className='everyday'>
								<span>第四天</span>
								<div className='everydayTitle'><img src={location} alt='location'/><p>{item.trip_des2_content2_7}</p></div>
								<p>{item.trip_des2_content2_8}</p>
							</div>
							<div className='everydayLive'><img src={home} alt='home'/><p>住宿：</p><span>飯店</span></div>
							<div className='everyday'>
								<span>第五天</span>
								<div className='everydayTitle'><img src={location} alt='location'/><p>{item.trip_des2_content2_9}</p></div>
								<p>{item.trip_des2_content2_10}</p>
							</div>
							<div className='everydayLive'><img src={home} alt='home'/><p>住宿：</p><span>飯店</span></div>
						</div>
					</div>
				: null}

            {this.state.btn === "了解更多" & this.state.btn2 === '旅行細節' ? 
					<div>
				  		<h4>{this.state.btn2}</h4>
						  <div className='TripDesDetailBox'>
				  				<span>參加人數</span>
								<p>{item.trip_des2_content3_1}</p>
						  </div>
						  <div className='TripDesDetailBox'>
				  				<span>旅程的精神</span>
								<p>{item.trip_des2_content3_2}</p>
						  </div>
						  <div className='TripDesDetailBox'>
				  				<span>供應</span>
								<p>{item.trip_des2_content3_3}</p>
						  </div>
						  <div className='TripDesDetailBox'>
				  				<span>住宿</span>
								<p>{item.trip_des2_content3_4}</p>
						  </div>
						  <div className='TripDesDetailBox'>
				  				<span>預算與變更</span>
								<p>{item.trip_des2_content3_5}</p>
						  </div>
						  <div className='TripDesDetailBox'>
				  				<span>小費</span>
								<p>{item.trip_des2_content3_6}</p>
						  </div>
					</div> 
				: null}

				{this.state.btn === "了解更多" & this.state.btn2 === '設備' ? 
					<div>
				  		<h4>{this.state.btn2}</h4>
						  <div className='TripDesDetailBox'>
				  				<span>現場提供的設備</span>
								<p>提供了用於活動的特定設備。大部分都已包含在活動價格中。</p>
								<p>-對於雪地摩托活動，雪橇犬或雪鞋：提供了覆蓋物（夾克和冷褲，冷靴，頭盔或巴拉克拉瓦）</p>
								<p>-野營活動AuroresBoréales：睡袋和皮膚提供馴鹿。</p>
						  </div>
						  <div className='TripDesDetailBox'>
				  				<span>穿著服裝</span>
									<p>從腳到頭的衣服：</p>
									<p>-一雙徒步旅行的遠足鞋。它們必須結合三種品質：力量，良好的腳和腳踝抵抗力（高莖）和抗滲透性。選擇防滑鞋底，冰爪和相對較硬的鞋子，它們必須在地面上懸掛良好。</p>
									<p>羊毛襪、羽絨服（可選) -最有效的防風和防雨夾克是Gore-tex或Micropore，這是一種“透氣”材料，可以快速排汗。</p>
									<p>-保暖的套頭衫或搖粒絨外套。後者的優點是耐高溫，輕便。它迅速乾燥並提供柔軟的觸感。最合適的，眾所周知的登山者是Polartec，Carline和Ulfrotté纖維。-由Carline或Polartec等優質技術材料製成的長袖T卹非常有效，溫暖，柔軟，舒適且輕巧。他們很快就乾了。</p>
									<p>-達馬特式緊身衣</p>
									<p>-防水徒步褲</p>
									<p>-泳衣</p>
									<p>-一副好手套</p>
									<p>-毛線帽</p>
									<p style={{color:'#242a3a'}}>注意：排除容易吸收水分和乾燥的材料，例如牛仔褲或棉。另外，摩擦會刺激皮膚。</p>
									<p style={{color:'#242a3a'}}>在活動期間，當開始變熱時必須除去層，在寒冷時應穿好衣服。極地沒有懶惰！</p>
						  </div>
						  <div className='TripDesDetailBox'>
				  				<span>行李</span>
								  <p>您的所有行李必須分為2個袋子：</p>
								  <p>-攜帶最多20公斤的旅行包或行李箱存放您的所有個人物品。</p>
								  <p>-一個小背包（容量約40升），可在白天裝您的個人物品：毛衣和備用襪子，水瓶，野餐午餐，眼鏡，相機。</p>
						  </div>
						  <div className='TripDesDetailBox'>
				  				<span>藥店</span>
								  <p>建議帶上個人藥物（阿司匹林，繃帶，局部消毒劑，棉花等）。</p>
								  <p>活動期間的指南無權為您提供。</p>
								  <p></p>
						  </div>
					</div> 
				:null}
				{this.state.btn === "了解更多" & this.state.btn2 === '手續與健康' ? 
					<div>
				  		<h4>{this.state.btn2}</h4>
				  		<div className='TripDesDetailBox'>
				  			<span>護照</span>
							<p>護照或身份證絕對有效（請立即檢查有效期限）。</p>
							<p>如果您與孩子一起旅行，請注意，未成年人，無論其年齡如何，還必須擁有個人身份證或個人護照。</p>
							<p>請注意，自2017年1月15日起，在沒有父母陪伴的情況下出國旅行的孩子必須出示以下三個文件：
								-未成年人的有效身份證件：身份證或護照，以及根據目的地國家/地區的要求提供的簽證（請通過訪問plotietie.gouv.fr網站的國家/地區表進行驗證）
								-簽署父母的有效身份證件的複印件：身份證或護照
								-由一位家長授權的父母簽署的退出授權書。
							</p>
						</div>
				  		<div className='TripDesDetailBox'>
				  			<span>簽證</span>
							<p>歐洲國民不需要簽證。</p>
						</div>
				  		<div className='TripDesDetailBox'>
				  			<span>身份證</span>
							<p>身份證必須有效（立即檢查有效期）</p>
							<p>自2014年1月1日起，發給成人的國民身份證（NIC）的有效期將從10年延長至15年。請注意，此擴展將與頒發給未成年人有效年齡10年的CNI無關。剛剛在2013年12月20日星期五的官方雜誌上發布了一項為此目的的法令。這5年的延期將涉及兩個方面：2014年1月1日發布的新CNI，2004年1月2日發布的CNI和2004年12月31日。對於2004年1月2日至2013年12月31日之間簽發的CNI，此5年延期將不涉及用戶方面的任何特殊程序，而在證券上寫明的有效期不改變。對於每個接受以下國家/地區地圖的國家/地區：
								http://www.interieur.gouv.fr/Actualites/L-actu-du-Ministere/Duree-de-validite-de-la-CNI
							</p>
						</div>
				  		<div className='TripDesDetailBox'>
				  			<span>疫苗</span>
							<p>無需接種疫苗。</p>
						</div>
					</div> 
				: null }

          </div>
        </div>
      </Container>
		 ))}
      
		</>
    );
  }
}

export default TripDes2;
