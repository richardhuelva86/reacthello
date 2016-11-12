import React, {Component, PropTypes} from "react";
import ReactDOM from 'react-dom';
import Tablon from './Tablon';
import Form from './Form';


let cardsList = [
{
id: 1,
title: "Read the Book",
description: "I should read the whole book",
status: "in-progress",
tasks: []
},
{
id: 2,
title: "Write some code",
description: "Code along with the samples in the book",
status: "todo",
tasks: [
{
id: 1,
name: "ContactList Example",
done: true
},
{
id: 2,
name: "Kanban Example",
done: false
},
{
id: 3,
name: "My own experiments",
done: false
}
]
},
];


//ReactDOM.render(<Tablon tarjetas={cardsList}/>, document.getElementById('root'));
ReactDOM.render(<Form/>, document.getElementById('root'));
