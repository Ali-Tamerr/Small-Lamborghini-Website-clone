import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import back from './imgs/back.png';

const Section5 = ({ startLoading, translate, ...props }) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        startLoading();
        setTimeout(() => navigate('/'), 1000);
    };
    useEffect(() => {
        return () => {
            window.scrollTo({
                top: 0,
            });
        };
    }, []);

    return (
        <div id='section-5'>
            <img id='section-5-image-3' src={props.imgLogo} alt='' />

            <div id='section-5-div-1'>
                <div id="section-5-div-1-1">
                    <div id='section-5-image-1-div'>
                        <img id='section-5-image-1' src={props.img1} alt='' />
                        <div id='section-5-rect-1'></div>
                    </div>
                    <div id="section-5-content">
                        <div id="section-5-span-1">{translate('overview')}</div>
                        <div id="section-5-span-2">
                            {props.span2}
                        </div>
                    </div>
                </div>
                <div id="section-5-span-2s">
                    {props.span2}
                </div>
            </div>
            <div id='section-5-div-2'>
                <div id="section-5-div-2-1">
                    <div id="section-5-content">
                        <div id="section-5-span-3">{translate('interior')}</div>
                        <div id="section-5-span-4">
                            {props.span4}
                        </div>
                    </div>
                    <div id='section-5-image-2-div'>
                        <img id='section-5-image-2' src={props.img2} alt='' />
                        <div id='section-5-rect-2'></div>
                        <div id="section-5-span-3s">{translate('interior')}</div>
                    </div>
                </div>
                <div id="section-5-span-4s">
                    {props.span4}
                </div>
            </div>
            <div id='section-5-div-3'>
                <div id="section-5-div-3-1">
                    <div id='section-5-image-4-div'>
                        <img id='section-5-image-4' src={props.img4} alt='' />
                        <div id='section-5-rect-4'></div>
                    </div>
                    <div id="section-5-content">
                        <div id="section-5-span-5">{translate('exterior')}</div>
                        <div id="section-5-span-6">
                            {props.span6}
                        </div>
                    </div>
                </div>
                <div id="section-5-span-6s">
                    {props.span6}
                </div>
            </div>

            <span id='go-back' onClick={handleGoBack}>
                <img src={back} alt='back' /> Go Back
            </span>
        </div>
    );
};

export default Section5;