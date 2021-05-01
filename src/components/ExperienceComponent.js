import React from 'react';

export default function ExperienceComponent({ experiences = [] }) {
    return (
        <div>
            {
                experiences.map(experience => {
                    return (
                        <div key={experience.id} className="experienceContainer">
                            <div className="experiencePeriod">{experience.period}</div>
                            <div className="experienceTitle">{experience.jobTitle}</div>
                            <div className="experienceCompany">{experience.company}</div>
                            <ul>
                                {experience.jobContents.map((content)=>{
                                    return (
                                        <li key={content.id}>{content.content}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    );
                })
            }
        </div>

    );
}
