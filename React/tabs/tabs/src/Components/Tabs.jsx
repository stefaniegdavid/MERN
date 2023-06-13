import React, { useState } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const Tabs = () => {
    const [tabs, setTabs] = useState(["Tab 1 content is showing here", "Tab 2 content is showing here", "Tab 3 content is showing here"]);
    let [currentTab, setCurrentTab] = useState(0);


    const diffTab = (e) => {
        setCurrentTab(e.target.value);
    }

    return (
        <div className='container'>
            <div style={{ display: 'flex', margin: "30px" }}>
                <button onClick={diffTab} value={0}> Tab 1 </button>
                <button onClick={diffTab} value={1}> Tab 2 </button>
                <button onClick={diffTab} value={2}> Tab 3 </button>
            </div>
            <div>{tabs[currentTab]}</div>
            <div className='border border-dark'>
                <h2>{tabs.content}</h2>
            </div>
        </div>
    );
}
export default Tabs;