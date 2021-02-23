import React from 'react';
import './transition-demo.css'


const Clock = () => {
    return (
        <div className="transition-demo-page">
            <h1>Transition 实现</h1>
            <div>
                <p>鼠标悬浮实现时钟效果</p>
                <div className="clock"></div>
            </div>
            <div>
                <p>悬浮切换</p>
                <div className="slider01">
                    <div className="box01">
                        <img className="post01" src="https://i.loli.net/2021/02/23/VInz1tcBfqC8RKL.jpg" alt="javascript" />
                        <img className="post01" src="https://i.loli.net/2021/02/23/wMP6W3GvZDSeoVX.jpg" alt="python" />
                    </div>
                </div>
            </div>
            <div>
                <p>多元素悬浮切换</p>
                <div className="slider02">
                    <div className="box02">
                        <img className="post02" src="https://i.loli.net/2021/02/23/VInz1tcBfqC8RKL.jpg" alt="javascript" />
                        <img className="post02" src="https://i.loli.net/2021/02/23/wMP6W3GvZDSeoVX.jpg" alt="python" />
                        <img className="post02" src="https://i.loli.net/2021/02/23/NGUfEmRKnY7bhrz.jpg" alt="ruby" />
                    </div>
                </div>
            </div>
            <div>
                <p>点赞效果</p>
                <div className="like-box">
                    <div className="fa fa-heart heart"></div>
                    <div className="fa fa-heart heart like-heart"></div>
                </div>
            </div>
        </div>
    )
}


export default Clock;