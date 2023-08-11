import React from "react";

export default function New(){
    return (
        <div>
            <form action="/pokemon/" method="POST">

            <label htmlFor="name">Name:</label><br />
            <input type="text" id='name' name='name'/> <br /><br />

            <button>Submit</button>
            </form>
        </div>
    )
}