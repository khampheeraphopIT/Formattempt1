import React, { useState } from "react";
import logo from '../assets/Images/logo.png';
import '../assets/css/Form.css';
import Avatar from '@mui/material/Avatar';
import Sidebar from "./Sidebar";
import { IoMdColorPalette } from "react-icons/io";
import { PiKeyReturnFill } from "react-icons/pi";
import { RiShareForwardFill } from "react-icons/ri";
import { HiDotsVertical } from "react-icons/hi";

type TabType = "question" | "response" | "setting";

const Form: React.FC = () => {
    const [title, setTitle] = useState<string>("แบบฟอร์มไม่มีชื่อ");
    const [active, setActive] = useState<TabType>("question");
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const [bgColor, setBgColor] = useState<string>("#D4BEE4");

    const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleTab = (tab: TabType): void => {
        setActive(tab);
    };

    // ฟังก์ชันเปิด-ปิด Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    // ฟังก์ชันสลับสี
    const handleSwitchColor = (color: string) => {
        setBgColor(color);
    };

    return (
        <div>
            <nav>
                <div className="main-nav">
                    <div className="nav-bar">
                        <div className="nav-name">
                            <div className="logo">
                                <img src={logo} alt="logo" width="50px" />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="title">
                                    <input
                                        type="text"
                                        value={title}
                                        onChange={handleChangeTitle}
                                        placeholder="ใส่ชื่อฟอร์ม"
                                    />
                                </div>
                            </form>
                        </div>
                        <ul className="nav-menu">
                            <li>
                                <IoMdColorPalette
                                    size="30px"
                                    className="menu-icon"
                                    onClick={toggleSidebar}
                                    style={{ cursor: 'pointer' }}
                                />
                            </li>
                            <li><PiKeyReturnFill size="30px" className="menu-icon" /></li>
                            <li><RiShareForwardFill size="30px" className="menu-icon" /> </li>
                            <li><HiDotsVertical size="30px" className="menu-icon" /></li>
                            <Avatar className="avatar"></Avatar>
                        </ul>
                    </div>

                    <div className="container">
                        <div className="section">
                            <div
                                className={`tab ${active === "question" ? "active" : ""}`}
                                onClick={() => handleTab("question")}
                            >
                                คำถาม
                            </div>
                            <div
                                className={`tab ${active === "response" ? "active" : ""}`}
                                onClick={() => handleTab("response")}
                            >
                                การตอบกลับ
                            </div>
                            <div
                                className={`tab ${active === "setting" ? "active" : ""}`}
                                onClick={() => handleTab("setting")}
                            >
                                การตั้งค่า
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section style={{ backgroundColor: bgColor }}>
                <div className="form">
                    <div className="form-container">
                        <label>Firstname</label>
                        <input type="text" placeholder="FirstName"></input>
                    </div>
                </div>

                {/* แสดง Sidebar เมื่อ isSidebarOpen เป็น true */}
                {isSidebarOpen && (
                    <Sidebar
                        toggleSidebar={toggleSidebar}
                        handleSwitchColor={handleSwitchColor}
                        isOpen={isSidebarOpen} // ส่งค่า isOpen ไปที่ Sidebar
                    />
                )}

            </section>
        </div>
    );
};

export default Form;
