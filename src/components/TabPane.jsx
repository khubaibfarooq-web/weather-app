import React, { useState } from 'react';

const TabPane = ({ children }) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabs = React.Children.toArray(children);

    return (
        <>
            <div className="flex justify-center">
                <div className="max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-mercuryGrey rounded-[8px]  mb-8 min-[480px]:mb-[40px]">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`cursor-pointer flex-1 text-sm font-medium  h-8 px-4 rounded-[8px] whitespace-nowrap focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out hover:text-slate-900 ${index === activeTab ? 'bg-white border border-mediumGrey text-secondaryText' : 'text-darkMercuryGrey'}`}
                            onClick={() => handleTabClick(index)}
                        >
                            {tab.props.title}
                        </button>
                    ))}
                </div>
            </div>
            <div className="tab-content">
                {tabs[activeTab].props.children}
            </div>
        </>
    );
};

export default TabPane;
