import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <React.Fragment>
     <div>
  <div className="container cv">
    <div className="row _1">
      <div className="col-sm-12 khoi tren">
        <div className="name">Trần Ngọc Trang Đài</div>
      </div> {/* het khoi tren */}
    </div> {/* het 1row */}
  </div> {/* het con1 */}
  <div className="container khoiduoi">
    <div className="row _2">
      <div className="col-sm-9 khoi">
        <div className="khoitrai">
          <div className="row _1khoi">
            <div className="col-sm-12">
              <div className="tieumuc">Mục tiêu nghề nghiệp</div>
              <ul>
                <li>Bacon ipsum dolor amet capicola meatloaf tenderloin landjaeger short ribs, brisket
                  cupim kielbasa alcatra. Chicken short loin </li>
                <li>Rump cupim leberkas, salami biltong meatball fatback. Leberkas flank spare ribs
                  landjaeger sirloin prosciutto porchetta bacon .</li>
                <li>Bacon kevin doner, alcatra chuck cupim kielbasa pork meatloaf landjaeger buffalo
                  flank t-bone short ribs. Shankle pork chop .</li>
              </ul>
            </div>
          </div> {/* het 1row */}
          <hr />
          <div className="row _1khoi them">
            <div className="col-sm-9">
              <div className="icon">
                <div className="nen" />
                <i className="fa fa-lightbulb-o" />
              </div>
              <div className="tieumuc">trình độ học vấn</div>
              <div className="line" />
              <ul>
                <li>Bacon ipsum dolor amet capicola meatloaf tenderloin landjaeger short ribs, brisket
                  cupim kielbasa alcatra. Chicken short loin </li>
                <li>Rump cupim leberkas, salami biltong meatball fatback. Leberkas flank spare ribs
                  landjaeger sirloin prosciutto porchetta bacon .</li>
                <li>Bacon kevin doner, alcatra chuck cupim kielbasa pork meatloaf landjaeger buffalo
                  flank t-bone short ribs. Shankle pork chop .</li>
              </ul>
            </div>
            <div className="col-sm-3"> Time</div>
          </div> {/* het 1row */}
          <hr />
          <div className="row _1khoi them">
            <div className="col-sm-9">
              <div className="icon">
                <div className="nen" />
                <i className="fa fa-users" />
              </div>
              <div className="tieumuc ">kinh nghiệm làm việc</div>
              <div className="line kn" />
              <ul>
                <li>Bacon ipsum dolor amet capicola meatloaf tenderloin landjaeger short ribs, brisket
                  cupim kielbasa alcatra. Chicken short loin </li>
                <li>Rump cupim leberkas, salami biltong meatball fatback. Leberkas flank spare ribs
                  landjaeger sirloin prosciutto porchetta bacon .</li>
                <li>Bacon kevin doner, alcatra chuck cupim kielbasa pork meatloaf landjaeger buffalo
                  flank t-bone short ribs. Shankle pork chop .</li>
              </ul>
            </div>
            <div className="col-sm-3"> Time</div>
          </div> {/* het 1row */}
          <hr />
          <div className="row _1khoi them">
            <div className="col-sm-9">
              <div className="icon">
                <div className="nen" />
                <i className="fa fa-pencil" />
              </div>
              <div className="tieumuc">thông tin thêm</div>
              <div className="line tt" />
              <ul>
                <li>Bacon ipsum dolor amet capicola meatloaf tenderloin landjaeger short ribs, brisket
                  cupim kielbasa alcatra. Chicken short loin </li>
                <li>Rump cupim leberkas, salami biltong meatball fatback. Leberkas flank spare ribs
                  landjaeger sirloin prosciutto porchetta bacon .</li>
                <li>Bacon kevin doner, alcatra chuck cupim kielbasa pork meatloaf landjaeger buffalo
                  flank t-bone short ribs. Shankle pork chop .</li>
              </ul>
            </div>
            <div className="col-sm-3"> Time</div>
          </div> {/* het 1row */}
        </div> {/* het khoi trai */}
      </div> {/* hetcol trai*/}
      <div className="col-sm-3 khoiphai">
        <div className="row ">
          <div className="row anh">
            <div className="avatar">
              <img src="images/ava1npm.jpg" alt="" />
            </div>
          </div> {/* het anh */}
          <div className="row text">
            <i className="fa fa-calendar "> </i>
            <p> 01/11/1997</p>
            <i className="fa fa-phone "> </i>
            <p>0903871047 </p>
            <i className="fa fa-envelope-square" />
            <p> baboiletta@gmail.com</p>
            <i className="fa fa-map-marker " />
            <p> Số 1 Thái Phiên P.16 Q.11</p>
            <i className="fa fa-facebook" />
            <p> facebook.com/trangdai.tran.3</p>
          </div> {/* het text */}
          <div className="tdt kn">
            <h4>Kỹ năng</h4>
            <ul>
              <li> Shankle pork chop</li>
              <li className="line">
                <div className="dong fs" />
              </li>
              <li>Bacon kevin doner</li>
              <li className="line">
                <div className="dong sd" />
              </li>
              <li>Bacon ipsum dolor amet</li>
              <li className="line">
                <div className="dong _th" />
              </li>
              <li>Leberkas flank</li>
              <li className="line">
                <div className="dong _ft" />
              </li>
            </ul>
          </div>
          <div className="tdt st">
            <h4>Sở thích</h4>
            <ul>
              <li> Shankle pork chop</li>
              <li>Bacon kevin doner</li>
              <li>Bacon ipsum dolor amet</li>
              <li>Leberkas flank</li>
            </ul>
          </div>
        </div> {/* het khoi phai */}
      </div> {/* het col phai nho */}
    </div> {/* hetrow2*/}
  </div> {/* het col2 */}
  <i className="fa fa-chevron-left top" />
</div>

   </React.Fragment>
  );
}

export default App;
