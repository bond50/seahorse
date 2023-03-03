import React from 'react';
import classes from '../../styles/team.module.css'
import Image from "next/image";

const Team = () => {
    const members = [
        {name: 'Franklin Soita', src: '', delay: '100', role: 'Technical/ Operations Officer'},
        {name: 'Ryan Mutembei ', src: '', delay: '200', role: 'Member of the Board of Directors at SeaHorse Energy'},
        {name: 'Margaret Munga', src: '', delay: '300', role: 'Marketing Officer at SeaHorse Energy'},
        {name: 'Reagan Kitoi', src: '', delay: '400', role: 'Engineering Specialist'},
        {name: 'Regina Nduku', src: '', delay: '500', role: 'Procurement Officer'},
    ]
    return (
        <section>
            <div className="container" data-aos="fade-up">
                <div className="section-header">
                    <h2>Our Team</h2>
                </div>
                <div className="row gy-4">
                    {members.map((member, i) => {
                        return <div
                            className="col-lg-3 col-md-6"
                            data-aos="fade-up"
                            data-aos-delay={member.delay}
                            key={i}>
                            <div className={classes.member}>
                                <div className={classes.img}>
                                    <Image
                                        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                                         className="img-fluid" alt="" width={960} height={720}/>
                                </div>
                                <div className={classes.memberInfo}>
                                    <h3>{member.name}</h3>
                                    <span>{member.role}</span>
                                </div>
                            </div>
                        </div>
                    })}


                </div>

            </div>
        </section>
    );
};

export default Team;