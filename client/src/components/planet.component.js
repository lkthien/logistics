import React, { useState, useEffect } from "react";

const Planets = () => {
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});

    async function fetchData() {
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin', 'http://localhost:3001/api/accounts');
        const res = await fetch({
            mode: 'cors',
            method: 'GET',
            headers: headers
        });
        res
            .json()
            .then(res => setPlanets(res))
            .catch(err => setErrors(err));
    }

    useEffect(() => {
        fetchData();
    });

    return (
        <div>
            <span>{JSON.stringify(planets)}</span>
            <hr />
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    );
};
export default Planets;