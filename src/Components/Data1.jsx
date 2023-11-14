import React from 'react'
import { AiOutlineCloudDownload, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { BsCheckAll } from "react-icons/bs";
import './Style/Dash.css'

function Data1() {
    return (
        <div className='detailmain'>
            <div className='details2' >
                <ol className='deatil2ol1'>
                    <button className='buttondown1-2'>Free Forever</button>
                    <li className='detailhead'>Free Smarter</li>
                    <li className='listpara'>The quickest and easiest way to try Protocols with basic functionaliies</li>
                    <button className='buttondown1'>Get Started &#10141;</button>
                </ol>
                <ol className='deatil2ol2' style={{ textAlign: 'left' }}>
                    <li className='listpara'>What you'll get :</li>
                    <li className='listpara'><AiOutlineUser /> &nbsp;Upto 8 Users</li>
                    <li className='listpara'><AiOutlineCloudDownload /> &nbsp;Upto 30gb Storage</li>
                    <li className='listpara'><AiOutlineMail /> &nbsp;Email support</li>
                    <li className='listpara'><BsCheckAll /> &nbsp;Basic of Documents, Task Flow, Voting, Accounting, Banking, Notes, Inverstor, Director and Team Management included</li>
                </ol>
            </div>

            <div className='details2' >
                <ol className='deatil2ol1-1'>
                    <button className='buttondown2-2'>Let's Connect</button>
                    <li className='detailhead'>Enterprise Plan</li>
                    <li className='listpara'>Effortlessly customize and fine-tune services as your needs shift, ensuring the perfect tools for success</li>
                    <button className='buttondown2'>Contact Us &#10141;</button>
                </ol>
                <ol className='deatil2ol2-2' >
                    <li className='listpara'>What you'll get :</li>
                    <li className='listpara'><AiOutlineUser /> &nbsp;More than 75 Users</li>
                    <li className='listpara'><BsCheckAll /> &nbsp;Customization of all other features</li>
                </ol>
            </div>
        </div>
    )
}

export default Data1