import React, { useState,Fragment } from 'react';
import { Radio, Space, Tabs,NavLink} from 'antd';
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
            // color: "white",
            marginTop:"90px",
          }}
        >
          LỊCH CHIẾU
        </h1>
      <Tabs
        tabPosition={tabPosition}
       
      >
        <TabPane tab={
                  <div style={{width:"300px",display:'flex'}}>
                    <img src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" className="rounded-full" width="50"/>
                        <div className="text-left ml-2">
                        BHD Star Cineplex - Bitexco
                        <p style={{color:"red"}}>chi tiết</p>  
                        </div>
                  </div>
                  }>
                  <Fragment>
                      <div className="my-2" style={{display:"flex"}} >
                          <div className="d-flex">
                            <img style={{width:"100px",height:"100px"}} src="https://movienew.cybersoft.edu.vn/hinhanh/lua-deu-gap-lua-dao_gp03.jpg" alt="" />
                            <div className="ml-2 ">
                               <h1  style={{color:'green',fontWeight:'700'}}>Lừa Đểu Gặp Lừa Đảo</h1>
                                <p>L3-Bitexco Icon 68, 2 Hải Triều, Q.1</p>
                                <div className="grid grid-cols-6 gap-6">
                                <p>10:10AM</p>

                                </div>
                            
                            </div>
                    
                          </div>
                          
                      </div>
                      <hr/>
                  </Fragment>
                  </TabPane>
      </Tabs>
    </>
  )
}
