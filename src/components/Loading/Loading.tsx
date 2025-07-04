import React from 'react';
import './Loading.css'

function Loading() {
    let iterations = 0;
    let loaded = false;
    document.documentElement.style.setProperty("--loading", "100%");
    let checkData = setInterval(() => {
        if(loaded) {
            clearInterval(checkData);
        }
        else if (sessionStorage.getItem('songs') !== null || iterations > 20) {
            document.documentElement.style.setProperty("--loading", "0");
            loaded = true;
            setInterval(() => {
                let element = document.getElementById("loading");
                if (element != null) { element.remove()}}, 1000);
        }
        iterations++;
    }, 100)


    return(<>
            <div className="loading" id="loading">
                <div className="outerbox">
                    <div className="innerbox">
                        <div className="line_1"></div>
                        <div className="line_2"></div>
                        <div className="line_3"></div>
                        <div className="line_4"></div>
                        <div className="line_5"></div>
                        <div className="line_6"></div>
                        <div className="line_7"></div>
                    </div>
                </div>
                <h1>Loading Songs!</h1>
            </div>
        </>)
}

export default Loading;