import React from 'react';
// import './App.css';
// import './1.css';
import {FaLightbulb, FaUsers,FaPencilAlt,FaCalendarAlt,FaPhone,FaMapMarkerAlt,FaEnvelopeSquare,FaFacebook, FaSwimmer,FaHeadphonesAlt, FaBookReader,  } from 'react-icons/fa';
import { IoLogoGameControllerB} from 'react-icons/io';





function App() {
  return (
    <React.Fragment>
      <div>
        <div className="container cv">
          <div className="row _1">
            <div className="col-sm-12 khoi tren">
              <div className="name">Trần Ngọc Trang Đài
              </div>
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
                      <li>Tôi tên là Trần Ngọc Trang Đài, hiện đang là học viên tự do của Green Acadamy.
                        Mục tiêu của tôi là trở thành Front-end developer sau khi hoàn thành khóa học tại đây. </li>
                      <li>Và đây là cơ hội tốt để tôi có cơ hội áp dụng những kiến thức đã học vào thực tế.</li>
                    </ul>
                  </div>
                </div> {/* het 1row */}
                <hr />
                <div className="row _1khoi them">
                  <div className="col-sm-9">
                    <div className="icon">
                      <div className="nen" />
                      <FaLightbulb className="fa"/>
                    </div>
                <div className="tieumuc">trình độ học vấn</div>
                    <div className="line" />
                    <ul>
                    <li><b>05/2019 - Hiện tại</b><br/>
                      - Tham gia khóa học thiết kế web ở Green Acadamy.
                       </li>
                      <li><b>06/2017 - 05/2019</b><br/>
                      - Học Quản trị kinh doanh ở trường Đại học mở hệ từ xa.
                       </li>
                      <li><b>08/2016 - 01/2017</b><br/>
                      - Học Marketing & Sales ở trường Cao Đẳng thực hành FPT.
                       </li>
                      <li><b>09/2015</b><br/>
                      - Tốt nghiệp THPT.
                       </li>
                    </ul>
                  </div>
                  {/* <div className="col-sm-3"> Time</div> */}
                </div> {/* het 1row */}
                <hr/>
               
                   
                
                <div className="row _1khoi them">
                  <div className="col-sm-9">
                    <div className="icon">
                      <div className="nen" ></div>
                      <FaUsers className="fa"></FaUsers>
                    </div>
                    <div className="tieumuc ">kinh nghiệm làm việc</div>
                    <div className="line kn" ></div>
                    <ul>
                      <li className="ten">CÔNG TY TNHH DV DL VIỆT THÁI BÌNH DƯƠNG </li>
                      <li>Nhân viên quản trị website và fanpage <br/>
                      - Hỗ trợ viết bài quảng cáo sản phẩm qua facebook. <br/>
                      - Giới thiệu, tư vấn sản phẩm, giải đáp các vấn đề thắc mắc của khách hàng qua điện thoại và email. <br/>
                      - Cập nhật thông tin, hình ảnh lên trang web. 
                      </li>
                      
                      <li className="ten">  CÔNG TY TNHH DV DL VIỆT THÁI BÌNH DƯƠNG                   
                      </li>
                      <li>Quản lí coffee shop</li>
                      <li> - Bán hàng trực tiếp tại cửa hàng. <br/>  
                      - Quảng bá sản phẩm thông qua các ấn phẩm truyền thông: banner, poster, tờ rơi. <br/>
                      - Lập báo cáo sản lượng bán ra hàng ngày. <br/>
                      - Quản lí, điều chế chất lượng sản phẩm. <br/>   
                      - Lập báo cáo doanh thu, hàng tồn kho hàng tháng. <br/>                 
                      </li>
                      
                    </ul>
                    </div>
                  
                  <div className="col-sm-3"> 06/2016 - 02/2018</div>
                </div> {/* het 1row */}
                <hr />
               
                <div className="row _1khoi them">
                  <div className="col-sm-9">
                    <div className="icon">
                      <div className="nen" />
                      <FaPencilAlt className="fa"></FaPencilAlt>
                    </div>
                    <div className="tieumuc">thông tin thêm</div>
                    <div className="line tt" />
                    <ul>
                    
                      <li><b>02/2019</b><br/>
                      - Tham gia khóa học ngắn hạn về Photoshop.
                       </li>
                      <li><b>06/2018</b><br/>
                      - Tham dự khóa học trà vò tay Temomi của nghệ nhân Hiroki Nemoto.
                       </li>
                      <li><b>12/2017</b><br/>
                      - Thực tập kĩ năng Art Latte với thầy Pháp Võ.
                       </li>
                    </ul>
                  </div>
                  {/* <div className="col-sm-3"> Time</div> */}
                </div>
                 {/* het 1row */}
              </div> 
              {/* het khoi trai */}
            </div> 
            {/* hetcol trai*/}
            <div className="col-sm-3 khoiphai">
              <div className="row ">
                <div className="row anh">
                  <div className="avatar">
                    <img src="images/ava1.jpg" alt="" />
                  </div>
                </div>
                 {/* het anh */}
                <div className="row text">
                  
                  <p> <FaCalendarAlt className="fas"></FaCalendarAlt> 01/11/1997</p>
                  
                  <p> <FaPhone className="fas"></FaPhone>0903.871.047 </p>
                 
                  <p>  <FaEnvelopeSquare className="fas"></FaEnvelopeSquare> baboiletta@gmail.com</p>
                 
                  <p>  <FaMapMarkerAlt className="fas"></FaMapMarkerAlt> Số 1 Thái Phiên P.16 Q.11</p>
                 
                  <p>   <FaFacebook className="fas"></FaFacebook> facebook.com/trangdai.tran.3</p>
                </div> {/* het text */}
                <div className="tdt kn">
                  <h4>Kỹ năng</h4>
                  <ul>
                    <li>Web design</li>
                    <li className="line">
                      <div className="dong fs" />
                    </li>
                    <li>Creativity</li>
                    <li className="line">
                      <div className="dong sd" />
                    </li>
                    <li>Teamwork</li>
                    <li className="line">
                      <div className="dong _th" />
                    </li>
                    <li>Photoshop</li>
                    <li className="line">
                      <div className="dong _ft" />
                    </li>
                    <li> HTML/CSS</li>
                    <li className="line">
                      <div className="dong fs" />
                    </li>
                    <li>Bootstrap</li>
                    <li className="line">
                      <div className="dong sd" />
                    </li>
                    <li>GitHub</li>
                    <li className="line">
                      <div className="dong _th" />
                    </li>
                    <li>WordPress</li>
                    <li className="line">
                      <div className="dong _ft" />
                    </li>
                   
                  </ul>
                </div>
                <div className="tdt st">
                  <h4>Sở thích</h4>
                  <ul>
                    <li> <FaSwimmer/> Bơi</li>
                    <li><FaHeadphonesAlt/>Nghe nhạc</li>
                    <li><FaBookReader/>Đọc sách</li>
                    <li><IoLogoGameControllerB/>Chơi game</li>
                  </ul>
                </div>
              </div> {/* het khoi phai */}
            </div> {/* het col phai nho */}
          </div> {/* hetrow2*/}
        </div> {/* het col2 */}
        {/* <i className="fa fa-chevron-left top" /> */}
      </div>

    </React.Fragment>
  );
}

export default App;
