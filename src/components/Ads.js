import React, { useEffect, useState } from 'react';

import '../App.css';

import { useHistory } from "react-router-dom";

function Ads() {
  let history = useHistory();
  useEffect(() => {
    fetchAds();
  }, []);

  const [ads, setAds] = useState([]);
  const [cats, setCats] = useState([]);

  const fetchAds = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const data = await fetch("http://localhost/drupal/jsonapi/node/community_add", requestOptions);

    const adsData = await data.json();



    fetchCat(adsData.data);
  }

  const fetchCat = async (ads) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    for (var i in ads) {
      const category = await fetch("http://localhost/drupal/jsonapi/node/category/" + ads[i].relationships.field_type.data.id, requestOptions);
      const info = await category.json();

      ads[i].attributes.category = info.data.attributes.title;
    }
    console.log(ads);
    setAds(ads);

    //all cats
    const category = await fetch("http://localhost/drupal/jsonapi/node/category", requestOptions);
    const cats = await category.json();

    setCats(cats.data);
  }

  const deleteItem = (item) => {
    console.log('deleted', item);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/vnd.api+json");
    myHeaders.append("Authorization", "Basic YXBpOmFwaQ==");

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("http://localhost/drupal/jsonapi/node/community_add/" + item, requestOptions)
      .then(() => fetchAds())
      .catch(error => console.log('error', error));
  }

  const filter = async (id) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    const data = await fetch("http://localhost/drupal/jsonapi/node/community_add?filter[field_type.id]=" + id, requestOptions);
    const adsData = await data.json();

    fetchCat(adsData.data);
  }

  return (
    <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '60%' }}>
      <h1>Ads</h1>
      <div>
        <button onClick={() => history.push(`/create`)}>Create</button>
        <button onClick={() => fetchAds()}>Todos</button>
        {
          cats.map((item, index) => (
            <button key={index} onClick={() => filter(item.id)}>{item.attributes.title}</button>
          ))
        }
      </div>

      {
        ads.map((item, index) => (
          <div key={index}>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <h2>{item.attributes.title}</h2>
              <h3>{item.attributes.field_date}</h3>
            </div>
            <h4 style={{ textAlign: 'initial' }}>Tipo: {item.attributes.category}</h4>
            <p style={{ textAlign: 'initial' }}>
              {item.attributes.field_news_description}
            </p>
            <button onClick={() => history.push(`/edit/${item.id}`)}>Edit</button>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))
      }
    </div>
  );
}

export default Ads;
