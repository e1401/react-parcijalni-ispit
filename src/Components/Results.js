import React from 'react'
import PropTypes from 'prop-types';

const Results = (props) => {


    console.log(props)

    const { avatar_url, name, bio, location } = props.val;
    const repoList = props.valFromRepos;
    

    if (!avatar_url && !name && !bio && !location) {
        return (
            <p>Please enter search query</p>
        )
    }

    const listItems = repoList.map((oneRepo) => {
        return (
            <ul key={Math.random()}> <li><a href={oneRepo.html_url}>{oneRepo.name}</a></li></ul>

        )

    });

    return (
        <div>
            <h2>Results:</h2>
            <div className="results">

                <div key={Math.random()}>
                    <img src={avatar_url} alt="Avatar" />
                    <p>Name: {name}</p>
                    <p>Short bio: {bio}</p>
                    <p>Location: {location}</p>
                </div>

                <div key={Math.random()}>

                    <div>
                        <h3>Repositories on GitHub</h3>

                        {listItems}

                    </div>

                </div>

            </div>

        </div>
    )
}





export default Results

Results.propTypes = {
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    location: PropTypes.string,



}