import React, { useState } from "react";

import CPLayout from "../components/cp/CPLayout";


const CP = () => {

    const [activeSection, setActiveSection] =
        useState("overview");


    return (
        <CPLayout
            activeSection={activeSection}
            setActiveSection={setActiveSection}
        />
    );
};


export default CP;