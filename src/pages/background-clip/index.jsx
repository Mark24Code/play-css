import React from 'react';
import './background-clip.css';

const BackgroundClipPage = () => {
    return (
        <div className="background-clip-page">
            <p>白色是关注内容，background-clip属性可以控制背景的覆盖范围。</p>
            <div className="bg bg-padding-box">background-clip: padding-box; </div>
            <div className="bg bg-content-box">background-clip: content-box;</div>
            <div className="bg bg-border-box">background-clip: border-box;</div>
        </div>
    )
}

export default BackgroundClipPage;