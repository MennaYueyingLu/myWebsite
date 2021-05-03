import React from "react";

export default function Progress({ progresses = [] } ) {
    return (
        <div className="row">
            {
                progresses.map(progress => {
                    return (
                        <div key={progress.id} className="progressContainer col-6 col-12-mobile">
                            <div className="progressTitle">{progress.title}
                                <span>{progress.percent}</span>
                            </div>
                            <div className="progress">
                                <div className="progressbar"style={{width: progress.percent}}></div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}