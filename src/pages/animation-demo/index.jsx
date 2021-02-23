import React from 'react';
import './animation-demo.css';

const AnimationDemoPage = () => {
    return (
        <div className="animation-demo-page">
            <h1>Animation实现</h1>
            <div className="demo1">鼠标放到我身上</div>

            <div>
                <p>赛隆人之眼</p>
                <div class="view_port">
                    <div class="polling_message">
                        Listening for dispatches
                    </div>
                    <div class="cylon_eye"></div>
                </div>
            </div>

            <div>
                <p>水圈特效</p>
                <div className="circles-box">
                    <div className="circle-inner c01"></div>
                    <div className="circle-inner c02"></div>
                    <div className="circle-inner c03"></div>
                    <div className="text">CSS IS AWESOME</div>
                </div>
            </div>
        </div>
    )
}

export default AnimationDemoPage;