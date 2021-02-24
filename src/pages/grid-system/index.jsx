import React from 'react';
import './grid-system.css';
import './index.css';

const BackgroundClipPage = () => {
    return (
        <div className="grid-system-page">
            <div className="grid-container outline">
                <div className="row">
                    <div className="col-1">
                        <p>col-1</p>
                    </div>
                    <div className="col-1">
                        <p>col-1</p>
                    </div>
                    <div className="col-1">
                        <p>col-1</p>
                    </div>
                    <div className="col-1">
                        <p>col-1</p>
                    </div>
                    <div className="col-1">
                        <p>col-1</p>
                    </div>
                    <div className="col-1">
                        <p>col-1</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <p>col-2</p>
                    </div>
                    <div className="col-2">
                        <p>col-2</p>
                    </div>
                    <div className="col-2">
                        <p>col-2</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <p>col-3</p>
                    </div>
                    <div className="col-3">
                        <p>col-3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundClipPage;