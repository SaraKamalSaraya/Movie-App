import React from 'react'
// import 'Progress_Bar.css'

export default function Progress_Bar() {
    return (
        <div class="row d-flex justify-content-center mt-100">
            <div class="col-md-6">
                <div class="progress blue">
                    <span class="progress-left">
                        <span class="progress-bar"></span>
                    </span>
                    <span class="progress-right">
                        <span class="progress-bar"></span>
                    </span>
                    <div class="progress-value">90%</div>
                </div>
            </div>
        </div>
    )
}
