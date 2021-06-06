// import Libraries
import React from "react";
import {connect} from "react-redux";
import {hot} from "react-hot-loader";

import "./Footer.scss";

export default class Footer extends React.Component {
  // render
  constructor(props){
    super(props);
  }
  componentDidMount(){
    
  }

  render() {
 
    return (
      <div className="footer_page">
           <div className="footer_page_view">
                <div className="footer_left_view">
                    <div className="footer_logo">
                        <img src={image_baseurl+""}/>
                    </div>
                    <div className="footer_text_sub_desp" style={{marginTop:20}}>
                      ©2019 My Pro India Pvt Ltd 
                    </div>
                    <div className="footer_text_sub_desp">
                      All Rights Reserved. 
                    </div>
                    <div className="footer_text_desp">
                      The certification names are the trademarks of their respective owners.
                    </div>
                </div>
                <div className="footer_right_view">
                    <div className="footer_right_content">
                        <div className="footer_right_list">
                          <div className="footer_right_list_title">
                            Social Media
                          </div>
                          <div className="footer_right_list_each">
                            Facebook
                          </div>
                          <div className="footer_right_list_each">
                            LinkedIn
                          </div>
                          <div className="footer_right_list_each">
                            Twitter
                          </div>
                          <div className="footer_right_list_each">
                            YouTube
                          </div>
                        </div>
                        <div className="footer_right_list">
                          <div className="footer_right_list_title">
                            Support
                          </div>
                          <div className="footer_right_list_each">
                            Contact Us
                          </div>
                          <div className="footer_right_list_each">
                            FAQs
                          </div>
                          <div className="footer_right_list_each">
                            Terms
                          </div>
                          <div className="footer_right_list_each">
                            Privacy Policy
                          </div>
                        </div>
                        <div className="footer_right_list">
                          <div className="footer_right_list_title">
                            Company
                          </div>
                          <div className="footer_right_list_each">
                            About Us
                          </div>
                          <div className="footer_right_list_each">
                            Blogs
                          </div>
                          <div className="footer_right_list_each">
                            Affiliate Program
                          </div>
                          <div className="footer_right_list_each">
                            Partners
                          </div>
                        </div>
                    </div>
                </div>
           </div>
      </div>
    );
  }
}