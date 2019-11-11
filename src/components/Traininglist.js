import React, { useState, useEffect } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

const Traininglist       = () => {
    const [trainings, setTrainings] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchTrainings();        

    }, [])

    const fetchTrainings = () => {

        fetch('https://customerrest.herokuapp.com/api/trainings')
            .then(response => response.json())
            .then(data => setTrainings(data.content))
            .catch(err => console.error(err))
    }

    const columns = [
        {
            Header: 'Date',
            accessor: 'date'
        },

        {
            Header: 'Duration',
            accessor: 'duration'
        },

        {
            Header: 'Activity',
            accessor: 'activity'
        },

    ]
    return (
        <div>
          
            <ReactTable filterable={true} columns={columns} data={trainings} />
        
        </div>
    );

};

export default Traininglist;