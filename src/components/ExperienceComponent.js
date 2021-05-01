import React, { Component } from 'react';

class ExperienceComponent extends Component {
    constructor(propos){
        super(propos);
    }

    createContents(contents) {
        if (contents) {
            const contentsList = contents.map((content) => {
                return (
                    <li key={content.id}>{content.content}</li>
                );
            });
            return (
                <ul>{contentsList}</ul>
            )
        }else{
            return (
                <div></div>
            );
        }
    }

    createExperience(experiences){
        if (experiences) {
            const experiencesList = experiences.map((experience) => {
                return (
                    <div key={experience.id} className="experienceContainer">
                    <div className="experiencePeriod">{experience.period}</div>
                    <div className="experienceTitle">{experience.jobTitle}</div>
                    <a className="experienceCompany" target="_blank" href={experience.companyLink}>{experience.company}</a>
                    {this.createContents(experience.jobContents)}
                </div>
                );
            });
            return experiencesList;
        }else{
            return(<div></div>)
        }
    }

    render(){
        return (
            <div>{this.createExperience(this.props.experiences)}</div>
        );
    }
}

export default ExperienceComponent;
