import React, { useState } from "react";

interface SwitchColorProps {
  switchColor: (color: string) => void;
}

const ColorSwitch: React.FC<SwitchColorProps> = ({ switchColor }) => {
  const [bgColor, setBgColor] = useState("#ffffff"); // สำหรับค่าเลือกสี
  const [hexColor, setHexColor] = useState("#ffffff"); // สำหรับค่าที่กรอกรหัสสี

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBgColor(e.target.value); // อัปเดตสีพื้นหลังเมื่อเลือกสี
    setHexColor(e.target.value); // อัปเดตรหัสสี Hex ที่กรอกให้ตรงกัน
    switchColor(e.target.value); // เก็บค่าสีที่เลือก
  };

  const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
      setBgColor(e.target.value); // อัปเดตพื้นหลังเมื่อกรอกรหัสสีที่ถูกต้อง
      setHexColor(e.target.value); // อัปเดตรหัสสี Hex ที่กรอกให้ตรงกัน
      switchColor(e.target.value); // เก็บค่าสีที่กรอก
    } else {
      setHexColor(e.target.value); // ถ้าไม่ใช่รหัสสีที่ถูกต้อง ก็แค่เปลี่ยนค่าใน input
    }
  };

  return (
    <div className="color">
      <input
        type="text"
        id="hex-color"
        value={hexColor}
        onChange={handleHexChange}
        placeholder="#ff5733"
        maxLength={7}
        style={{ width: "100px" }}
      />
      <input
        type="color"
        id="pl-color"
        value={bgColor}
        onChange={handleColorChange}
      />
    </div>
  );
};

export default ColorSwitch;
