import React from 'react'
import { AiOutlineCloudDownload, AiOutlineMail, AiOutlinePlus, AiOutlineUser } from "react-icons/ai";
import { BsBellFill } from 'react-icons/bs';
import { Button } from 'react-bootstrap';
import'./Style/Dash.css'
import Data1 from './Data1';

function Data() {


    return (
        <div>
            <div className='datadiv'>
                <span >
                    <h2 className='headh2'>Choose a Plan that's just right for you !</h2>
                    <ol className='topplan'>
                        <Button className='topplanbutton'>Monthly</Button>&nbsp;
                        <Button className='topplanbutton'>Annually <sup style={{ color: 'green', fontWeight: '400' }}>-10%</sup></Button>
                    </ol>
                </span>
                <div className='d-flex datadivsub'>
                    <div className='pricedetail'>
                        <ol className='ol' >
                            <li className='olstyle ' style={{ fontSize: '23px' }} >Basic</li>
                            <li className='listprice'><del>$89.9/mo</del></li>
                            <li className='olstyle' style={{ fontSize: '20px' }} >$9.99/mo</li>
                            <button className='getstrbut' style={{ backgroundColor: 'rgb(244, 213, 156)' }}>Get Started &#10141;</button>
                            <hr style={{ marginRight: '20px' }} />
                        </ol>
                        <ol className='ol'>
                            <li className='listpara'>What you'll get :</li>
                            <li className='listpara'><AiOutlineUser /> &nbsp;Upto 25 Users</li>
                            <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 25gb Storage</li>
                            <li className='listpara'><AiOutlineMail /> &nbsp;Email Support</li>
                            <li className='listpara'><a className='explore' href="http">EXPLORE FEATURES &#10151;</a></li>
                        </ol>
                    </div>

                    <div className='pricedetail'>
                        <ol className='ol' >
                            <li className='olstyle ' style={{ fontSize: '23px' }} >Standard</li>
                            <li className='listprice'><del>$189.99/mo</del></li>
                            <li className='olstyle' style={{ fontSize: '20px' }}>$99.99/mo</li>
                            <button className='getstrbut' style={{ backgroundColor: 'rgb(244, 147, 127)' }}>Get Started &#10141;</button>
                            <hr style={{ marginRight: '20px' }} />
                        </ol>
                        <ol className='ol'>
                            <li className='listpara'>What you'll get :</li>
                            <li className='listpara'><AiOutlineUser /> &nbsp;Upto 50 Users</li>
                            <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 60gb Storage</li>
                            <li className='listpara'><AiOutlineMail /> &nbsp;Email + Chat Support</li>
                            <li className='listpara'><a className='explore' href="http">EXPLORE FEATURES &#10151;</a></li>
                        </ol>
                    </div>

                    <div className='pricedetail'>
                        <ol className='ol' >
                            <li className='olstyle ' style={{ fontSize: '23px' }} >Premium</li>
                            <li className='listprice'><del>$389.9/mo</del></li>
                            <li className='olstyle' style={{ fontSize: '20px' }}>$199.99/mo</li>
                            <button className='getstrbut' style={{ backgroundColor: 'rgb(213, 108, 245)' }}>Get Started &#10141;</button>
                            <hr style={{ marginRight: '20px' }} />
                        </ol>
                        <ol className='ol'>
                            <li className='listpara'>What you'll get :</li>
                            <li className='listpara'><AiOutlineUser /> &nbsp;Upto 75 Users</li>
                            <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 100gb Storage</li>
                            <li className='listpara'><AiOutlineMail /> &nbsp;Email + Chat + Whatsapp Support</li>
                            <li className='listpara'><a className='explore' href="http">EXPLORE FEATURES &#10151;</a></li>
                        </ol>
                    </div>
                </div>
                <Data1 />
            </div>
            <div className='datadiv2'>
                <span className='notifispan'>
                    <BsBellFill size='17' className='notifi' /><sup className='sup'>3</sup>
                </span>
                <span >
                    <section className="blankspace"></section>
                </span>
                <span >
                    <section className="addbutton"><AiOutlinePlus style={{ position: 'absolute', marginTop: '7px', marginLeft: '6.5px' }} /></section>
                </span>
            </div>
        </div>
    )
}

export default Data