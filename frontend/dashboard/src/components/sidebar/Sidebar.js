import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'



import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from '../Card/Card'
import Header from '../Header/Header'
import Overview from '../Overview/Overview'
import Record from '../Records/Record'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Sidebar.css'


const Sidebar=()=>{


    return(
        <Router>
        <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                  <span className='title-circle'></span>  <span class="fs-5 d-none d-sm-inline">Expertia</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link align-middle px-0">
                            <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline sidebarcolor ">Overview</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline sidebarcolor">Candidates</span> </a>
                        
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline sidebarcolor">Hiring Team</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline sidebarcolor">Resume Folder</span></a>
                        
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> <span class="ms-1 d-none d-sm-inline sidebarcolor">Articles</span> </a>
                            
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline sidebarcolor">Settings</span> </a>
                    </li>
                </ul>
                <hr/>
                
            </div>
        </div>
        <div class="col py-3">
            <Header/>
            <div>
                <Record/>
            </div>
            <Overview/>
        </div>
    </div>
</div>
</Router>
    )
}

export default Sidebar