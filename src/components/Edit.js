import React, { useEffect, useState } from 'react';

import '../App.css';

import { useHistory } from "react-router-dom";

function Edit({ match }) {
    let history = useHistory();
    useEffect(() => {
        fetchAd();
        fetchCats();
        console.log(match);
    }, []);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');
    const [value, setValue] = useState('');
    const [cats, setCats] = useState([]);


    const fetchAd = async () => {


        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const data = await fetch("http://localhost/drupal/jsonapi/node/community_add/" + match.params.id, requestOptions);

        const ad = await data.json();

        console.log('ad', ad.data);

        setValue(ad.data.relationships.field_type.data.id);
        setTitle(ad.data.attributes.title);
        setDescription(ad.data.attributes.field_news_description);
        setId(ad.data.id);
    }

    const fetchCats = async () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const category = await fetch("http://localhost/drupal/jsonapi/node/category", requestOptions);
        const cats = await category.json();


        console.log('cats', cats);


        setCats(cats.data);
    }

    const save = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/vnd.api+json");
        myHeaders.append("Content-Type", "application/vnd.api+json");


        var ad =
        {
            "data": {
                "type": "node--community_add",
                "id": id,
                "attributes": {
                    "title": title,
                    "field_news_description": description
                },
                "relationships": {
                    "field_type": {
                        "data": {
                            "type": "node--category",
                            "id": value
                        }
                    }
                }
            }
        }

        console.log('data', ad);
        var raw = JSON.stringify(ad);

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost/drupal/jsonapi/node/community_add/" + id, requestOptions)
            .then(response => response.json())
            .then(result => console.log(result))
            .then(() => history.goBack())
            .catch(error => console.log('error', error));
    }


    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '60%' }}>
            <h1>Edit</h1>
            <label>Type: </label>
            <select value={value} onChange={e => setValue(e.target.value)}>
                {
                    cats.map((item, index) => (
                        <option key={index} value={item.id}>{item.attributes.title}</option>
                    ))
                }

            </select>
            <br />
            <label>Title: </label>
            <input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
            <br />
            <label>Description: </label>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} />
            <br />
            <button onClick={() => save()}>Save</button>
            <button onClick={() => history.goBack()}>Cancel</button>
        </div>
    );
}

export default Edit;
