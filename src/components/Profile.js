import React from 'react';
require('react-fontawesome');

const Profile = props => {
    const profileObj = props.profileData;
    return <div>
        <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileObj.picture} width="200"/></div>
        <h1 className="text-center">{profileObj.name}</h1>

        <h2 className="text-center">{profileObj.label}

        </h2>
          <div className="divider"></div>

        <ul className="list-unstyled contact-links text-center">
            <li>
                <i className="fa fa-lg fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.provice}, {profileObj.location.country}</li>
            <li>
                <i className="fa fa-lg fa-envelope"></i>
                <a href={`mailto:${profileObj.email}`}>{profileObj.email}</a>
            </li>
        </ul>
        <div className="divider"></div>
        <ul className="profileLinks list-inline text-center">
            <li>
                <a className="fa fa-facebook fa-2x" href={'https://facebook.com/' + profileObj.profiles[0].username}></a>
            </li>
            <li>
                <a className="fa fa-github fa-2x" href={'https://github.com/' + profileObj.profiles[1].username}></a>
            </li>
        </ul>

    </div>
};


export default Profile;
