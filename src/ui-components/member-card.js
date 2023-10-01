import React from 'react';
import './style/serviceStyle.css';
export default function MemberCard() {
  return (
    <div>
        <div class="businessCard materialize">
        <div class="background">
            <div class="diagonals"></div>
        </div>
        <div class="card-panel z-depth-4 hoverable">
            <div class="row valign-wrapper">
                <div class="col s8 leftSide">
                    <div class="row nameAndTitleSection">
                        <div class="fullName col s12">Mr. Joshua Tzucker</div>
                        <div class="divider col s12" style={{height:2}}></div>
                        <div class="jobTitle col s11 offset-s1">Professional Tinkerer</div>
                    </div>
                    <div class="row">
                        <div class="col s11 offset-s1 linksAndDetailsSection">
                            <div class="emailAddress col s12 valign-wrapper">
                                <div class="iconWrapper z-depth-2 iconsSolidBackground">
                                    <div class="icon">
                                        <i class="material-icons left">email</i>
                                    </div>
                                </div>
                                <div class="textWrapper">
                                    <a href="mailto:email@example.com" target="_blank">email@example.com</a>
                                </div>
                            </div>
                            <div class="rowJoinerWrapper"><div class="rowJoiner iconsSolidBackground"></div></div>
                            <div class="geography col s12 valign-wrapper">
                                <div class="iconWrapper z-depth-2 iconsSolidBackground">
                                    <div class="icon">
                                        <i class="material-icons left">map</i>
                                    </div>
                                </div>
                                <div class="textWrapper">
                                    <span>Greater Seattle Area</span>
                                </div>
                            </div>
                            <div class="rowJoinerWrapper"><div class="rowJoiner iconsSolidBackground"></div></div>
                            <div class="linkedInURL col s12 valign-wrapper">
                                <div class="iconWrapper z-depth-2 iconsSolidBackground">
                                    <div class="icon">
                                        <i class="material-icons left">link</i><i class="fa fa-linkedin-square iconsSolidBackground" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="textWrapper">
                                    <a href="https://www.linkedin.com/in/joshuatzucker" target="_blank">LinkedIn</a>
                                </div>
                            </div>
                            <div class="rowJoinerWrapper"><div class="rowJoiner iconsSolidBackground"></div></div>
                            <div class="codingProfileURL col s12 valign-wrapper">
                                <div class="iconWrapper z-depth-2 iconsSolidBackground">
                                    <div class="icon">
                                        <i class="material-icons left">code</i><i class="fa fa-github iconsSolidBackground" aria-hidden="true"></i>
                                    </div>
                                </div>
                                <div class="textWrapper">
                                    <a href="https://github.com/joshuatz" target="_blank">Github</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col s4 rightSide">
                    <div class="valign-wrapper">
                        <div class="profilePictureWrapper col s12 z-depth-2">
                           
                        </div>
                    </div>
                    <div class="ageWrapper col s12 center">
                        <span>Age ----</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
