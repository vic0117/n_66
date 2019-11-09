import React, { Component } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import search from "./images/search.svg";
import location from "./images/location.svg";
import trac from "./images/trac.svg";
import ring3 from "./images/ring3.svg";
import calender from "./images/calender.svg";
import duraction from './images/duration.svg';
import dollar from './images/dollar.svg'
import RangeSlider from './SliderDays';
import SliderPrice from './SliderPrice';
import "./TripLeftmenu.scss";

class TripLeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonTitleName1: "選擇目的地",
      buttonTitleName2: "選擇主題",
      buttonTitleName3: "選擇月份",
      buttonTitleName4: "選擇難度"
    };
  }

  render() {
    return (
      <div className="leftMenu">
        <div className="searchBox">
          <input type="text" placeholder="搜尋"></input>
          <div className='searchImg'>
            <img src={search} alt="search" />
          </div>
        </div>
        <div className="buttonTitle" style={{marginRight:'20px'}}>
          <img src={location} alt="location" />
          <p>目的地</p>
        </div>
        <DropdownButton
          style={{ width: "300px !important " }}
          id="dropdown-basic-button"
          title={this.state.buttonTitleName1}
          onSelect={eventKey => {
            this.setState({ buttonTitleName1: eventKey });
          }}
        >
          <Dropdown.Item eventKey="所有目的地" value="1" href="#/action-1">
            所有目的地
          </Dropdown.Item>
          <Dropdown.Item eventKey="阿拉斯加州" value="1" href="#/action-2">
            阿拉斯加州
          </Dropdown.Item>
          <Dropdown.Item eventKey="南極洲" value="2" href="#/action-3">
            南極洲
          </Dropdown.Item>
          <Dropdown.Item eventKey="加拿大" value="3" href="#/action-4">
            加拿大
          </Dropdown.Item>
          <Dropdown.Item eventKey="芬蘭" value="3" href="#/action-5">
            芬蘭
          </Dropdown.Item>
          <Dropdown.Item eventKey="格陵蘭" value="3" href="#/action-6">
            格陵蘭
          </Dropdown.Item>
          <Dropdown.Item eventKey="費洛群島" value="3" href="#/action-3">
            費洛群島
          </Dropdown.Item>
          <Dropdown.Item eventKey="冰島" value="3" href="#/action-3">
            冰島
          </Dropdown.Item>
          <Dropdown.Item eventKey="挪威" value="3" href="#/action-3">
            挪威
          </Dropdown.Item>
          <Dropdown.Item eventKey="俄羅斯" value="3" href="#/action-3">
            俄羅斯
          </Dropdown.Item>
          <Dropdown.Item eventKey="斯匹茲卑爾根島" value="3" href="#/action-3">
            斯匹茲卑爾根島
          </Dropdown.Item>
          <Dropdown.Item eventKey="瑞典" value="3" href="#/action-3">
            瑞典
          </Dropdown.Item>
        </DropdownButton>
        <div className="buttonTitle">
          <img src={trac} alt="trac" />
          <p>活動主題</p>
        </div>
        <DropdownButton
          id="dropdown-basic-button"
          title={this.state.buttonTitleName2}
          onSelect={eventKey => {
            this.setState({ buttonTitleName2: eventKey });
          }}
        >
          <Dropdown.Item eventKey="所有活動" value="1" href="#/action-1">
			 所有活動
          </Dropdown.Item>
          <Dropdown.Item eventKey="北極光" value="1" href="#/action-1">
            北極光
          </Dropdown.Item>
          <Dropdown.Item eventKey="駕車遊覽" value="2" href="#/action-2">
            駕車遊覽
          </Dropdown.Item>
          <Dropdown.Item eventKey="獨木舟" value="3" href="#/action-3">
			 獨木舟
          </Dropdown.Item>
          <Dropdown.Item eventKey="雪橇犬" value="3" href="#/action-3">
			 雪橇犬
          </Dropdown.Item>
          <Dropdown.Item eventKey="郵輪和帆船" value="3" href="#/action-3">
			 郵輪和帆船
          </Dropdown.Item>
          <Dropdown.Item eventKey="家庭" value="3" href="#/action-3">
            家庭
          </Dropdown.Item>
          <Dropdown.Item eventKey="多活動" value="3" href="#/action-3">
			 多活動
          </Dropdown.Item>
          <Dropdown.Item eventKey="動物觀察" value="3" href="#/action-3">
            動物觀察
          </Dropdown.Item>
          <Dropdown.Item eventKey="攝影" value="3" href="#/action-3">
            攝影
          </Dropdown.Item>
          <Dropdown.Item eventKey="划艇" value="3" href="#/action-3">
            划艇
          </Dropdown.Item>
          <Dropdown.Item eventKey="步行" value="3" href="#/action-3">
            步行
          </Dropdown.Item>
          <Dropdown.Item eventKey="雪鞋" value="3" href="#/action-3">
            雪鞋
          </Dropdown.Item>
          <Dropdown.Item eventKey="跨年" value="3" href="#/action-3">
            跨年
          </Dropdown.Item>
          <Dropdown.Item eventKey="遠足" value="3" href="#/action-3">
            遠足
          </Dropdown.Item>
        </DropdownButton>
        <div className="buttonTitle">
          <img src={calender} alt="calender" />
          <p>出發月份</p>
        </div>
		  <DropdownButton
          id="dropdown-basic-button"
          title={this.state.buttonTitleName3}
          onSelect={eventKey => {
            this.setState({ buttonTitleName3: eventKey });
          }}
        >
          <Dropdown.Item eventKey="所有月份" value="1" href="#/action-1">
			 所有月份
          </Dropdown.Item>
          <Dropdown.Item eventKey="一月" value="1" href="#/action-1">
			 一月
          </Dropdown.Item>
          <Dropdown.Item eventKey="二月" value="2" href="#/action-2">
			 二月
          </Dropdown.Item>
          <Dropdown.Item eventKey="三月" value="3" href="#/action-3">
			 三月
          </Dropdown.Item>
          <Dropdown.Item eventKey="四月" value="3" href="#/action-3">
			 四月
          </Dropdown.Item>
          <Dropdown.Item eventKey="五月" value="3" href="#/action-3">
			 五月
          </Dropdown.Item>
          <Dropdown.Item eventKey="六月" value="3" href="#/action-3">
			 六月
          </Dropdown.Item>
          <Dropdown.Item eventKey="七月" value="3" href="#/action-3">
			 七月
          </Dropdown.Item>
          <Dropdown.Item eventKey="八月" value="3" href="#/action-3">
            八月
          </Dropdown.Item>
          <Dropdown.Item eventKey="九月" value="3" href="#/action-3">
            九月
          </Dropdown.Item>
          <Dropdown.Item eventKey="十月" value="3" href="#/action-3">
            十月
          </Dropdown.Item>
          <Dropdown.Item eventKey="十一月" value="3" href="#/action-3">
            十一月
          </Dropdown.Item>
          <Dropdown.Item eventKey="十二月" value="3" href="#/action-3">
            十二月
          </Dropdown.Item>
        </DropdownButton>
        <div className="buttonTitle">
          <img src={ring3} alt="ring3" />
          <p>難度選擇</p>
        </div>
		  <DropdownButton
          id="dropdown-basic-button"
          title={this.state.buttonTitleName4}
          onSelect={eventKey => {
            this.setState({ buttonTitleName4: eventKey });
          }}
        >
          <Dropdown.Item eventKey="所有難度" value="1" href="#/action-1">
			 所有難度
          </Dropdown.Item>
          <Dropdown.Item eventKey="非常簡單" value="1" href="#/action-1">
			 非常簡單
          </Dropdown.Item>
          <Dropdown.Item eventKey="簡單" value="2" href="#/action-2">
			 簡單
          </Dropdown.Item>
          <Dropdown.Item eventKey="普通" value="3" href="#/action-3">
			 普通
          </Dropdown.Item>
          <Dropdown.Item eventKey="困難" value="3" href="#/action-3">
			 困難
          </Dropdown.Item>
          <Dropdown.Item eventKey="非常困難" value="3" href="#/action-3">
			 非常困難
          </Dropdown.Item>
        </DropdownButton>
		  <div className="buttonTitle" style={{marginRight:'30px',marginBottom:'30px'}}>
          <img src={duraction} alt="duraction" />
          <p>天數</p>
      	</div>
		  <RangeSlider/>
		  <div className="buttonTitle" style={{marginRight:'30px',marginBottom:'30px'}}>
          <img src={dollar} alt="dollar" />
          <p>價錢</p>
      	</div>
			<SliderPrice/>
      </div>
    );
  }
}

export default TripLeftMenu;
