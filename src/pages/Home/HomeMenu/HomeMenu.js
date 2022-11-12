import React, { useState,Fragment } from 'react';
import {  Tabs} from 'antd';
import  "../HomeMenu/HomeMenu.css";
import {NavLink}  from 'react-router-dom'
const { TabPane } = Tabs;

export default function HomeMenu(props) {

   const [tabPosition, setTabPosition] = useState('left');

  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };

  return (
    <>
    <h1
          style={{
            textAlign: "center",
            fontSize: "45px",
            fontFamily: "ui-monospace",
            fontWeight: 800,
            color: "white",
            marginTop:"90px",
            marginBottom:"30px"
          }}
        >
          LỊCH CHIẾU
        </h1>
        <Tabs tabPosition={tabPosition} style={{width: "100%",border: "solid 1px #f7f8f9",borderRadius: 15,marginBottom:"70px"}}>
        <TabPane tab={<img src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" className="rounded-full" width="50"/>} >
               <Tabs tabPosition={tabPosition}>
               <TabPane tab={
                  <div style={{width:"300px",display:'flex'}}>
                   <img src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" className="rounded-full" width="50"/>
                        <div className="text-left ml-2">
                        BHD Star Cineplex - Bitexco
                        <p style={{color:"red"}}>chi tiết</p>  
                        </div>
                  </div>
                  } >
                    <Fragment >
                    <div className="my-2" style={{display:"flex", paddingBottom:"20px"}} >
                          <div className="d-flex">
                            <img style={{width:"100px",height:"100px"}} src="https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-dao_gp03.jpg" alt="" />
                            <div className="ml-2 ">
                               <h3  style={{color:'green',fontWeight:'700'}}>Lừa Đểu Gặp Lừa Đảo</h3>
                                <p className='text'>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                <div className="grid grid-cols-6 gap-6">
                                <p className='time'>10:10AM</p>

                                </div>
                            
                            </div>
                    
                          </div>
                          
                      </div>
                      <hr/>
                      </Fragment>
                  </TabPane>
               </Tabs> 
          </TabPane>
          <TabPane tab={<img src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" className="rounded-full" width="50"/>} >
               <Tabs tabPosition={tabPosition}>
               <TabPane tab={
                  <div style={{width:"300px",display:'flex'}}>
                   <img src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" className="rounded-full" width="50"/>
                        <div className="text-left ml-2">
                        BHD Star Cineplex - Bitexco
                        <p style={{color:"red"}}>chi tiết</p>  
                        </div>
                  </div>
                  } >
                    <Fragment >
                    <div className="my-2" style={{display:"flex"}} >
                          <div className="d-flex">
                            <img style={{width:"100px",height:"100px"}} src="https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-dao_gp03.jpg" alt="" />
                            <div className="ml-2 ">
                               <h3  style={{color:'green',fontWeight:'700'}}>Lừa Đểu Gặp Lừa Đảo</h3>
                                <p className='text'>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                <div className="grid grid-cols-6 gap-6">
                                <p className='time'>10:10AM</p>

                                </div>
                            
                            </div>
                    
                          </div>
                          
                      </div>
                      <hr/>
                      </Fragment>
                  </TabPane>
               </Tabs> 
          </TabPane>
          <TabPane tab={<img src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" className="rounded-full" width="50"/>} >
               <Tabs tabPosition={tabPosition}>
               <TabPane tab={
                  <div style={{width:"300px",display:'flex'}}>
                   <img src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" className="rounded-full" width="50"/>
                        <div className="text-left ml-2">
                        BHD Star Cineplex - Bitexco
                        <p style={{color:"red"}}>chi tiết</p>  
                        </div>
                  </div>
                  } >
                    <Fragment >
                    <div className="my-2" style={{display:"flex"}} >
                          <div className="d-flex">
                            <img style={{width:"100px",height:"100px"}} src="https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-dao_gp03.jpg" alt="" />
                            <div className="ml-2 ">
                               <h3  style={{color:'green',fontWeight:'700'}}>Lừa Đểu Gặp Lừa Đảo</h3>
                                <p className='text'>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                <div className="grid grid-cols-6 gap-6">
                                <p className='time'>10:10AM</p>

                                </div>
                            
                            </div>
                    
                          </div>
                          
                      </div>
                      <hr/>
                      </Fragment>
                  </TabPane>
               </Tabs> 
          </TabPane>
        </Tabs>
    </>
  )
}
