import React from 'react';
import '../assets/css/Sidebar.css';
import ColorSwitch from './ColorSwitch';

interface SidebarProps {
    toggleSidebar: () => void;
    handleSwitchColor: (color: string) => void;
    isOpen: boolean; 
}

const Sidebar: React.FC<SidebarProps> = ({ toggleSidebar, handleSwitchColor, isOpen }) => {
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`} >
            <button className="sidebar-close" onClick={toggleSidebar}>X</button>
            <div className='menu-sidebar'>
                <div className='sidebar-title'>
                    <h1>Color</h1>
                </div>
                <div className='control-sidebar'>
                    <ul>
                        <li>
                            <ColorSwitch switchColor={handleSwitchColor} />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
