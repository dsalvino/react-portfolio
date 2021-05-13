import React, { useEffect, useState } from 'react';
import API from '../../utils/API.js';
import { ListItem } from '../list/list';

const Repos = () => {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        loadRepos()
    }, [])

    const loadRepos = () => {
        API.getRepos()
            .then(res =>
                setRepos(res.data) 
            )
            .catch(err => console.log(err));
    }

    const sortDate = (a, b) => {
        let dateA = a.created_at;
        let dateB = b.created_at;
        if (dateA < dateB) {
            return -1
        } if (dateA > dateB) {
            return 1;
        }
        return 0;
    }


    return (
        <div className="col-md-8">
            {repos.length ? (
                <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
                    {repos.sort(sortDate).reverse().map(repo => {
                        return (
                            <ListItem
                                key={repo.id}
                                name={repo.name}
                                full_name={repo.full_name}
                                description={repo.description}
                                html_url={repo.html_url}>
                            </ListItem>
                        );
                    })}
                </div>
            ) : (
                <h3>No Results to Display</h3>
            )}
        </div>
    );
}

export default Repos;