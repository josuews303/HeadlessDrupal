import React, { useState, useEffect } from 'react';

import '../App.css';

function Home() {

    useEffect(() => {
        fetchNews();
    }, []);

    const [items, setItems] = useState([]);

    const fetchNews = async () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const data = await fetch("http://localhost/drupal/news?_format=json", requestOptions);

        const items = await data.json();
        console.log(items);

        setItems(items)
    }

    return (
        <div>
            <h1>News</h1>

            {
                items.map((item,index) =>(
                    <div key={index}>
                        <h2>{item.title}</h2>
                        <h3>{item.field_date}</h3>
                        <img src={'http://localhost'+item.field_news_image}></img>
                        <p>
                            {item.field_news_description}
                        </p>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
