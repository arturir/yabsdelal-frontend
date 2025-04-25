import React from "react";
import { useEffect, useState } from "react";

export default function Popup ({ children }) {

    return (
        <div className="popup">
            <div className="popup__content">
                {children}
            </div>
        </div>
    )
}